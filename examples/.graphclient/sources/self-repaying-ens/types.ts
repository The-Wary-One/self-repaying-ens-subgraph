// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SelfRepayingEnsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Name = {
  /** The keccak256 hash of a name to renew. */
  id: Scalars['Bytes'];
  /** The name to renew. */
  text: Scalars['String'];
  /** Its subscriptions. */
  subscriptions: Array<NameSubscription>;
};


export type NamesubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSubscription_filter>;
};

/** Intermediate entity to dramatically increase index and query speeds. */
export type NameSubscription = {
  id: Scalars['Bytes'];
  subscription: SRENSSubscription;
  name: Name;
};

export type NameSubscription_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscription?: InputMaybe<Scalars['String']>;
  subscription_not?: InputMaybe<Scalars['String']>;
  subscription_gt?: InputMaybe<Scalars['String']>;
  subscription_lt?: InputMaybe<Scalars['String']>;
  subscription_gte?: InputMaybe<Scalars['String']>;
  subscription_lte?: InputMaybe<Scalars['String']>;
  subscription_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscription_contains?: InputMaybe<Scalars['String']>;
  subscription_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_contains?: InputMaybe<Scalars['String']>;
  subscription_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscription_starts_with?: InputMaybe<Scalars['String']>;
  subscription_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with?: InputMaybe<Scalars['String']>;
  subscription_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_ends_with?: InputMaybe<Scalars['String']>;
  subscription_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with?: InputMaybe<Scalars['String']>;
  subscription_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscription_?: InputMaybe<SRENSSubscription_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_?: InputMaybe<Name_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameSubscription_orderBy =
  | 'id'
  | 'subscription'
  | 'name';

export type Name_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  text?: InputMaybe<Scalars['String']>;
  text_not?: InputMaybe<Scalars['String']>;
  text_gt?: InputMaybe<Scalars['String']>;
  text_lt?: InputMaybe<Scalars['String']>;
  text_gte?: InputMaybe<Scalars['String']>;
  text_lte?: InputMaybe<Scalars['String']>;
  text_in?: InputMaybe<Array<Scalars['String']>>;
  text_not_in?: InputMaybe<Array<Scalars['String']>>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_contains_nocase?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_contains_nocase?: InputMaybe<Scalars['String']>;
  text_starts_with?: InputMaybe<Scalars['String']>;
  text_starts_with_nocase?: InputMaybe<Scalars['String']>;
  text_not_starts_with?: InputMaybe<Scalars['String']>;
  text_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  text_ends_with?: InputMaybe<Scalars['String']>;
  text_ends_with_nocase?: InputMaybe<Scalars['String']>;
  text_not_ends_with?: InputMaybe<Scalars['String']>;
  text_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriptions_?: InputMaybe<NameSubscription_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Name_orderBy =
  | 'id'
  | 'text'
  | 'subscriptions';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  subscription?: Maybe<SRENSSubscription>;
  subscriptions: Array<SRENSSubscription>;
  name?: Maybe<Name>;
  names: Array<Name>;
  subscribeEvent?: Maybe<SubscribeEvent>;
  subscribeEvents: Array<SubscribeEvent>;
  unsubscribeEvent?: Maybe<UnsubscribeEvent>;
  unsubscribeEvents: Array<UnsubscribeEvent>;
  subscriptionEvent?: Maybe<SubscriptionEvent>;
  subscriptionEvents: Array<SubscriptionEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerysubscriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SRENSSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SRENSSubscription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Name_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Name_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscribeEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscribeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscribeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscribeEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunsubscribeEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunsubscribeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnsubscribeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnsubscribeEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubscriptionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type SRENSSubscription = {
  /** The `subscriber` address. */
  id: Scalars['Bytes'];
  /** The ens names to renew. */
  names: Array<NameSubscription>;
  /** All the events emitted by `subscriber` */
  events: Array<SubscriptionEvent>;
};


export type SRENSSubscriptionnamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSubscription_filter>;
};


export type SRENSSubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionEvent_filter>;
};

export type SRENSSubscription_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  names_?: InputMaybe<NameSubscription_filter>;
  events_?: InputMaybe<SubscriptionEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SRENSSubscription_orderBy =
  | 'id'
  | 'names'
  | 'events';

/** The raw `Subscribe` event. */
export type SubscribeEvent = SubscriptionEvent & {
  id: Scalars['Bytes'];
  subscriber: SRENSSubscription;
  indexedName: Scalars['Bytes'];
  name: Scalars['String'];
  transactionHash: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
};

export type SubscribeEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['String']>;
  subscriber_not?: InputMaybe<Scalars['String']>;
  subscriber_gt?: InputMaybe<Scalars['String']>;
  subscriber_lt?: InputMaybe<Scalars['String']>;
  subscriber_gte?: InputMaybe<Scalars['String']>;
  subscriber_lte?: InputMaybe<Scalars['String']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_contains?: InputMaybe<Scalars['String']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_?: InputMaybe<SRENSSubscription_filter>;
  indexedName?: InputMaybe<Scalars['Bytes']>;
  indexedName_not?: InputMaybe<Scalars['Bytes']>;
  indexedName_in?: InputMaybe<Array<Scalars['Bytes']>>;
  indexedName_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  indexedName_contains?: InputMaybe<Scalars['Bytes']>;
  indexedName_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SubscribeEvent_orderBy =
  | 'id'
  | 'subscriber'
  | 'indexedName'
  | 'name'
  | 'transactionHash'
  | 'blockNumber'
  | 'blockTimestamp';

export type Subscription = {
  srenssubscription?: Maybe<SRENSSubscription>;
  srenssubscriptions: Array<SRENSSubscription>;
  name?: Maybe<Name>;
  names: Array<Name>;
  nameSubscription?: Maybe<NameSubscription>;
  nameSubscriptions: Array<NameSubscription>;
  subscribeEvent?: Maybe<SubscribeEvent>;
  subscribeEvents: Array<SubscribeEvent>;
  unsubscribeEvent?: Maybe<UnsubscribeEvent>;
  unsubscribeEvents: Array<UnsubscribeEvent>;
  subscriptionEvent?: Maybe<SubscriptionEvent>;
  subscriptionEvents: Array<SubscriptionEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionsrenssubscriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsrenssubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SRENSSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SRENSSubscription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnamesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Name_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Name_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameSubscriptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameSubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameSubscription_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameSubscription_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscribeEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscribeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscribeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscribeEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunsubscribeEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunsubscribeEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnsubscribeEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnsubscribeEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubscriptionEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubscriptionEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubscriptionEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type SubscriptionEvent = {
  id: Scalars['Bytes'];
  subscriber: SRENSSubscription;
  indexedName: Scalars['Bytes'];
  name: Scalars['String'];
  transactionHash: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
};

export type SubscriptionEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['String']>;
  subscriber_not?: InputMaybe<Scalars['String']>;
  subscriber_gt?: InputMaybe<Scalars['String']>;
  subscriber_lt?: InputMaybe<Scalars['String']>;
  subscriber_gte?: InputMaybe<Scalars['String']>;
  subscriber_lte?: InputMaybe<Scalars['String']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_contains?: InputMaybe<Scalars['String']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_?: InputMaybe<SRENSSubscription_filter>;
  indexedName?: InputMaybe<Scalars['Bytes']>;
  indexedName_not?: InputMaybe<Scalars['Bytes']>;
  indexedName_in?: InputMaybe<Array<Scalars['Bytes']>>;
  indexedName_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  indexedName_contains?: InputMaybe<Scalars['Bytes']>;
  indexedName_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SubscriptionEvent_orderBy =
  | 'id'
  | 'subscriber'
  | 'indexedName'
  | 'name'
  | 'transactionHash'
  | 'blockNumber'
  | 'blockTimestamp';

/** The raw `Unsubscribe` event. */
export type UnsubscribeEvent = SubscriptionEvent & {
  id: Scalars['Bytes'];
  subscriber: SRENSSubscription;
  indexedName: Scalars['Bytes'];
  name: Scalars['String'];
  transactionHash: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
};

export type UnsubscribeEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  subscriber?: InputMaybe<Scalars['String']>;
  subscriber_not?: InputMaybe<Scalars['String']>;
  subscriber_gt?: InputMaybe<Scalars['String']>;
  subscriber_lt?: InputMaybe<Scalars['String']>;
  subscriber_gte?: InputMaybe<Scalars['String']>;
  subscriber_lte?: InputMaybe<Scalars['String']>;
  subscriber_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_not_in?: InputMaybe<Array<Scalars['String']>>;
  subscriber_contains?: InputMaybe<Scalars['String']>;
  subscriber_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_contains?: InputMaybe<Scalars['String']>;
  subscriber_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subscriber_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with?: InputMaybe<Scalars['String']>;
  subscriber_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with?: InputMaybe<Scalars['String']>;
  subscriber_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subscriber_?: InputMaybe<SRENSSubscription_filter>;
  indexedName?: InputMaybe<Scalars['Bytes']>;
  indexedName_not?: InputMaybe<Scalars['Bytes']>;
  indexedName_in?: InputMaybe<Array<Scalars['Bytes']>>;
  indexedName_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  indexedName_contains?: InputMaybe<Scalars['Bytes']>;
  indexedName_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UnsubscribeEvent_orderBy =
  | 'id'
  | 'subscriber'
  | 'indexedName'
  | 'name'
  | 'transactionHash'
  | 'blockNumber'
  | 'blockTimestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  subscription: InContextSdkMethod<Query['subscription'], QuerysubscriptionArgs, MeshContext>,
  /** null **/
  subscriptions: InContextSdkMethod<Query['subscriptions'], QuerysubscriptionsArgs, MeshContext>,
  /** null **/
  name: InContextSdkMethod<Query['name'], QuerynameArgs, MeshContext>,
  /** null **/
  names: InContextSdkMethod<Query['names'], QuerynamesArgs, MeshContext>,
  /** null **/
  subscribeEvent: InContextSdkMethod<Query['subscribeEvent'], QuerysubscribeEventArgs, MeshContext>,
  /** null **/
  subscribeEvents: InContextSdkMethod<Query['subscribeEvents'], QuerysubscribeEventsArgs, MeshContext>,
  /** null **/
  unsubscribeEvent: InContextSdkMethod<Query['unsubscribeEvent'], QueryunsubscribeEventArgs, MeshContext>,
  /** null **/
  unsubscribeEvents: InContextSdkMethod<Query['unsubscribeEvents'], QueryunsubscribeEventsArgs, MeshContext>,
  /** null **/
  subscriptionEvent: InContextSdkMethod<Query['subscriptionEvent'], QuerysubscriptionEventArgs, MeshContext>,
  /** null **/
  subscriptionEvents: InContextSdkMethod<Query['subscriptionEvents'], QuerysubscriptionEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  srenssubscription: InContextSdkMethod<Subscription['srenssubscription'], SubscriptionsrenssubscriptionArgs, MeshContext>,
  /** null **/
  srenssubscriptions: InContextSdkMethod<Subscription['srenssubscriptions'], SubscriptionsrenssubscriptionsArgs, MeshContext>,
  /** null **/
  name: InContextSdkMethod<Subscription['name'], SubscriptionnameArgs, MeshContext>,
  /** null **/
  names: InContextSdkMethod<Subscription['names'], SubscriptionnamesArgs, MeshContext>,
  /** null **/
  nameSubscription: InContextSdkMethod<Subscription['nameSubscription'], SubscriptionnameSubscriptionArgs, MeshContext>,
  /** null **/
  nameSubscriptions: InContextSdkMethod<Subscription['nameSubscriptions'], SubscriptionnameSubscriptionsArgs, MeshContext>,
  /** null **/
  subscribeEvent: InContextSdkMethod<Subscription['subscribeEvent'], SubscriptionsubscribeEventArgs, MeshContext>,
  /** null **/
  subscribeEvents: InContextSdkMethod<Subscription['subscribeEvents'], SubscriptionsubscribeEventsArgs, MeshContext>,
  /** null **/
  unsubscribeEvent: InContextSdkMethod<Subscription['unsubscribeEvent'], SubscriptionunsubscribeEventArgs, MeshContext>,
  /** null **/
  unsubscribeEvents: InContextSdkMethod<Subscription['unsubscribeEvents'], SubscriptionunsubscribeEventsArgs, MeshContext>,
  /** null **/
  subscriptionEvent: InContextSdkMethod<Subscription['subscriptionEvent'], SubscriptionsubscriptionEventArgs, MeshContext>,
  /** null **/
  subscriptionEvents: InContextSdkMethod<Subscription['subscriptionEvents'], SubscriptionsubscriptionEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["self-repaying-ens"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
