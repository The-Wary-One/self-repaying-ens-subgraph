import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  Subscribe,
  Unsubscribe
} from "../generated/SelfRepayingENS/SelfRepayingENS"

export function createSubscribeEvent(
  subscriber: Address,
  indexedName: string,
  name: string
): Subscribe {
  let subscribeEvent = changetype<Subscribe>(newMockEvent())

  subscribeEvent.parameters = new Array()

  subscribeEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )
  subscribeEvent.parameters.push(
    new ethereum.EventParam(
      "indexedName",
      ethereum.Value.fromString(indexedName)
    )
  )
  subscribeEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return subscribeEvent
}

export function createUnsubscribeEvent(
  subscriber: Address,
  indexedName: string,
  name: string
): Unsubscribe {
  let unsubscribeEvent = changetype<Unsubscribe>(newMockEvent())

  unsubscribeEvent.parameters = new Array()

  unsubscribeEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )
  unsubscribeEvent.parameters.push(
    new ethereum.EventParam(
      "indexedName",
      ethereum.Value.fromString(indexedName)
    )
  )
  unsubscribeEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return unsubscribeEvent
}
