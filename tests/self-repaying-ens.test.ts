import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { Subscribe } from "../generated/schema"
import { Subscribe as SubscribeEvent } from "../generated/SelfRepayingENS/SelfRepayingENS"
import { handleSubscribe } from "../src/self-repaying-ens"
import { createSubscribeEvent } from "./self-repaying-ens-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let subscriber = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let indexedName = "Example string value"
    let name = "Example string value"
    let newSubscribeEvent = createSubscribeEvent(subscriber, indexedName, name)
    handleSubscribe(newSubscribeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Subscribe created and stored", () => {
    assert.entityCount("Subscribe", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Subscribe",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "subscriber",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Subscribe",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "indexedName",
      "Example string value"
    )
    assert.fieldEquals(
      "Subscribe",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
