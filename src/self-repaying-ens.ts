import {
  Subscribe as SubscribeEvent,
  Unsubscribe as UnsubscribeEvent
} from "../generated/SelfRepayingENS/SelfRepayingENS";
import {
  SRENSSubscription,
  Name,
  NameSubscription,
  SubscribeEvent as SubscribeEntity,
  UnsubscribeEvent as UnsubscribeEntity
} from "../generated/schema";
import { store, Value } from "@graphprotocol/graph-ts";

export function handleSubscribe(event: SubscribeEvent): void {
  // Load or create a `SRENSSubscription` entity for `subscriber`.
  let subscription = SRENSSubscription.load(event.params.subscriber);
  if (subscription == null) {
    subscription = new SRENSSubscription(event.params.subscriber);
    subscription.save();
  }

  // Load or create a `Name` entity.
  let name = Name.load(event.params.indexedName);
  if (name == null) {
    name = new Name(event.params.indexedName);
    name.text = event.params.name;
    name.save();
  }

  // Create a new `NameSubscription` entity.
  const nameSub = new NameSubscription(
    // Is unique since there can only be 1 active subscription for a given name by subscriber.
    subscription.id.concat(name.id)
  );
  nameSub.subscription = subscription.id;
  nameSub.name = name.id;
  nameSub.save();

  // Create `SubscribeEvent` entity.
  let entity = new SubscribeEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.subscriber = event.params.subscriber;
  entity.indexedName = event.params.indexedName;
  entity.name = event.params.name;

  entity.transactionHash = event.transaction.hash;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;

  entity.save();
}

export function handleUnsubscribe(event: UnsubscribeEvent): void {
  // Remove the corresponding `NameSubscription`. `nameSub` exists for sure here.
  store.remove("NameSubscription", event.params.subscriber.concat(event.params.indexedName).toHexString());

  // Create `UnsubscribeEvent` entity.
  let entity = new UnsubscribeEntity(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.subscriber = event.params.subscriber;
  entity.indexedName = event.params.indexedName;
  entity.name = event.params.name;

  entity.transactionHash = event.transaction.hash;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;

  entity.save();
}
