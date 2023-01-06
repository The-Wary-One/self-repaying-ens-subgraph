import {
  Subscribe as SubscribeEvent,
  Unsubscribe as UnsubscribeEvent
} from "../generated/SelfRepayingENS/SelfRepayingENS"
import { Subscribe, Unsubscribe } from "../generated/schema"

export function handleSubscribe(event: SubscribeEvent): void {
  let entity = new Subscribe(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subscriber = event.params.subscriber
  entity.indexedName = event.params.indexedName
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnsubscribe(event: UnsubscribeEvent): void {
  let entity = new Unsubscribe(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.subscriber = event.params.subscriber
  entity.indexedName = event.params.indexedName
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
