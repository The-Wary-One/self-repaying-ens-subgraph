// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { SelfRepayingEnsTypes } from './sources/self-repaying-ens/types';
import type { EnsTypes } from './sources/ens/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTTL>;
  newTTLs: Array<NewTTL>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
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


export type QuerydomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewResolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewResolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewTTL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewTTL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRenewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRenewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Resolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Resolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymulticoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MulticoinAddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryabiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryabiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AbiChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AbiChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PubkeyChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytextChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytextChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TextChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TextChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContenthashChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterfaceChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorisationChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

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
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTTL>;
  newTTLs: Array<NewTTL>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
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


export type SubscriptiondomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewResolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewResolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewTTL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewTTL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRenewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRenewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Resolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Resolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmulticoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MulticoinAddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionabiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionabiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AbiChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AbiChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PubkeyChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontextChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontextChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TextChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TextChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContenthashChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterfaceChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorisationChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
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
  registration: Registration;
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

export type AbiChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  contentType: Scalars['BigInt'];
};

export type AbiChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  contentType?: InputMaybe<Scalars['BigInt']>;
  contentType_not?: InputMaybe<Scalars['BigInt']>;
  contentType_gt?: InputMaybe<Scalars['BigInt']>;
  contentType_lt?: InputMaybe<Scalars['BigInt']>;
  contentType_gte?: InputMaybe<Scalars['BigInt']>;
  contentType_lte?: InputMaybe<Scalars['BigInt']>;
  contentType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contentType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AbiChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'contentType';

export type Account = {
  id: Scalars['ID'];
  domains: Array<Domain>;
  registrations?: Maybe<Array<Registration>>;
};


export type AccountdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
};


export type AccountregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domains_?: InputMaybe<Domain_filter>;
  registrations_?: InputMaybe<Registration_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Account_orderBy =
  | 'id'
  | 'domains'
  | 'registrations';

export type AddrChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  addr: Account;
};

export type AddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'addr';

export type AuthorisationChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  target: Scalars['Bytes'];
  isAuthorized: Scalars['Boolean'];
};

export type AuthorisationChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  isAuthorized?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_not?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuthorized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type AuthorisationChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'target'
  | 'isAuthorized';

export type ContenthashChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  hash: Scalars['Bytes'];
};

export type ContenthashChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  hash?: InputMaybe<Scalars['Bytes']>;
  hash_not?: InputMaybe<Scalars['Bytes']>;
  hash_gt?: InputMaybe<Scalars['Bytes']>;
  hash_lt?: InputMaybe<Scalars['Bytes']>;
  hash_gte?: InputMaybe<Scalars['Bytes']>;
  hash_lte?: InputMaybe<Scalars['Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_contains?: InputMaybe<Scalars['Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ContenthashChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'hash';

export type Domain = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  labelName?: Maybe<Scalars['String']>;
  labelhash?: Maybe<Scalars['Bytes']>;
  parent?: Maybe<Domain>;
  subdomains: Array<Domain>;
  subdomainCount: Scalars['Int'];
  resolvedAddress?: Maybe<Account>;
  owner: Account;
  resolver?: Maybe<Resolver>;
  ttl?: Maybe<Scalars['BigInt']>;
  isMigrated: Scalars['Boolean'];
  createdAt: Scalars['BigInt'];
  events: Array<DomainEvent>;
};


export type DomainsubdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
};


export type DomaineventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
};

export type DomainEvent = {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type DomainEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type DomainEvent_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID';

export type Domain_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelhash?: InputMaybe<Scalars['Bytes']>;
  labelhash_not?: InputMaybe<Scalars['Bytes']>;
  labelhash_gt?: InputMaybe<Scalars['Bytes']>;
  labelhash_lt?: InputMaybe<Scalars['Bytes']>;
  labelhash_gte?: InputMaybe<Scalars['Bytes']>;
  labelhash_lte?: InputMaybe<Scalars['Bytes']>;
  labelhash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelhash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelhash_contains?: InputMaybe<Scalars['Bytes']>;
  labelhash_not_contains?: InputMaybe<Scalars['Bytes']>;
  parent?: InputMaybe<Scalars['String']>;
  parent_not?: InputMaybe<Scalars['String']>;
  parent_gt?: InputMaybe<Scalars['String']>;
  parent_lt?: InputMaybe<Scalars['String']>;
  parent_gte?: InputMaybe<Scalars['String']>;
  parent_lte?: InputMaybe<Scalars['String']>;
  parent_in?: InputMaybe<Array<Scalars['String']>>;
  parent_not_in?: InputMaybe<Array<Scalars['String']>>;
  parent_contains?: InputMaybe<Scalars['String']>;
  parent_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_not_contains?: InputMaybe<Scalars['String']>;
  parent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_starts_with?: InputMaybe<Scalars['String']>;
  parent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_starts_with?: InputMaybe<Scalars['String']>;
  parent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_ends_with?: InputMaybe<Scalars['String']>;
  parent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_ends_with?: InputMaybe<Scalars['String']>;
  parent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_?: InputMaybe<Domain_filter>;
  subdomains_?: InputMaybe<Domain_filter>;
  subdomainCount?: InputMaybe<Scalars['Int']>;
  subdomainCount_not?: InputMaybe<Scalars['Int']>;
  subdomainCount_gt?: InputMaybe<Scalars['Int']>;
  subdomainCount_lt?: InputMaybe<Scalars['Int']>;
  subdomainCount_gte?: InputMaybe<Scalars['Int']>;
  subdomainCount_lte?: InputMaybe<Scalars['Int']>;
  subdomainCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subdomainCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  resolvedAddress?: InputMaybe<Scalars['String']>;
  resolvedAddress_not?: InputMaybe<Scalars['String']>;
  resolvedAddress_gt?: InputMaybe<Scalars['String']>;
  resolvedAddress_lt?: InputMaybe<Scalars['String']>;
  resolvedAddress_gte?: InputMaybe<Scalars['String']>;
  resolvedAddress_lte?: InputMaybe<Scalars['String']>;
  resolvedAddress_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_?: InputMaybe<Account_filter>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isMigrated?: InputMaybe<Scalars['Boolean']>;
  isMigrated_not?: InputMaybe<Scalars['Boolean']>;
  isMigrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isMigrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<DomainEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Domain_orderBy =
  | 'id'
  | 'name'
  | 'labelName'
  | 'labelhash'
  | 'parent'
  | 'subdomains'
  | 'subdomainCount'
  | 'resolvedAddress'
  | 'owner'
  | 'resolver'
  | 'ttl'
  | 'isMigrated'
  | 'createdAt'
  | 'events';

export type InterfaceChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  interfaceID: Scalars['Bytes'];
  implementer: Scalars['Bytes'];
};

export type InterfaceChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceID?: InputMaybe<Scalars['Bytes']>;
  interfaceID_not?: InputMaybe<Scalars['Bytes']>;
  interfaceID_gt?: InputMaybe<Scalars['Bytes']>;
  interfaceID_lt?: InputMaybe<Scalars['Bytes']>;
  interfaceID_gte?: InputMaybe<Scalars['Bytes']>;
  interfaceID_lte?: InputMaybe<Scalars['Bytes']>;
  interfaceID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceID_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceID_not_contains?: InputMaybe<Scalars['Bytes']>;
  implementer?: InputMaybe<Scalars['Bytes']>;
  implementer_not?: InputMaybe<Scalars['Bytes']>;
  implementer_gt?: InputMaybe<Scalars['Bytes']>;
  implementer_lt?: InputMaybe<Scalars['Bytes']>;
  implementer_gte?: InputMaybe<Scalars['Bytes']>;
  implementer_lte?: InputMaybe<Scalars['Bytes']>;
  implementer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementer_contains?: InputMaybe<Scalars['Bytes']>;
  implementer_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type InterfaceChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'interfaceID'
  | 'implementer';

export type MulticoinAddrChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  coinType: Scalars['BigInt'];
  addr: Scalars['Bytes'];
};

export type MulticoinAddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  coinType?: InputMaybe<Scalars['BigInt']>;
  coinType_not?: InputMaybe<Scalars['BigInt']>;
  coinType_gt?: InputMaybe<Scalars['BigInt']>;
  coinType_lt?: InputMaybe<Scalars['BigInt']>;
  coinType_gte?: InputMaybe<Scalars['BigInt']>;
  coinType_lte?: InputMaybe<Scalars['BigInt']>;
  coinType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  coinType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addr?: InputMaybe<Scalars['Bytes']>;
  addr_not?: InputMaybe<Scalars['Bytes']>;
  addr_gt?: InputMaybe<Scalars['Bytes']>;
  addr_lt?: InputMaybe<Scalars['Bytes']>;
  addr_gte?: InputMaybe<Scalars['Bytes']>;
  addr_lte?: InputMaybe<Scalars['Bytes']>;
  addr_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addr_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addr_contains?: InputMaybe<Scalars['Bytes']>;
  addr_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type MulticoinAddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'coinType'
  | 'addr';

export type NameChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  name: Scalars['String'];
};

export type NameChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'name';

export type NameRegistered = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  registrant: Account;
  expiryDate: Scalars['BigInt'];
};

export type NameRegistered_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameRegistered_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'registrant'
  | 'expiryDate';

export type NameRenewed = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  expiryDate: Scalars['BigInt'];
};

export type NameRenewed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameRenewed_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'expiryDate';

export type NameTransferred = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  newOwner: Account;
};

export type NameTransferred_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner?: InputMaybe<Scalars['String']>;
  newOwner_not?: InputMaybe<Scalars['String']>;
  newOwner_gt?: InputMaybe<Scalars['String']>;
  newOwner_lt?: InputMaybe<Scalars['String']>;
  newOwner_gte?: InputMaybe<Scalars['String']>;
  newOwner_lte?: InputMaybe<Scalars['String']>;
  newOwner_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_contains?: InputMaybe<Scalars['String']>;
  newOwner_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_contains?: InputMaybe<Scalars['String']>;
  newOwner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NameTransferred_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID'
  | 'newOwner';

export type NewOwner = DomainEvent & {
  id: Scalars['ID'];
  parentDomain: Domain;
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Account;
};

export type NewOwner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parentDomain?: InputMaybe<Scalars['String']>;
  parentDomain_not?: InputMaybe<Scalars['String']>;
  parentDomain_gt?: InputMaybe<Scalars['String']>;
  parentDomain_lt?: InputMaybe<Scalars['String']>;
  parentDomain_gte?: InputMaybe<Scalars['String']>;
  parentDomain_lte?: InputMaybe<Scalars['String']>;
  parentDomain_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_not_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_contains?: InputMaybe<Scalars['String']>;
  parentDomain_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_?: InputMaybe<Domain_filter>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NewOwner_orderBy =
  | 'id'
  | 'parentDomain'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'owner';

export type NewResolver = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  resolver: Resolver;
};

export type NewResolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NewResolver_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'resolver';

export type NewTTL = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  ttl: Scalars['BigInt'];
};

export type NewTTL_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type NewTTL_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'ttl';

export type PubkeyChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  x: Scalars['Bytes'];
  y: Scalars['Bytes'];
};

export type PubkeyChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  x?: InputMaybe<Scalars['Bytes']>;
  x_not?: InputMaybe<Scalars['Bytes']>;
  x_gt?: InputMaybe<Scalars['Bytes']>;
  x_lt?: InputMaybe<Scalars['Bytes']>;
  x_gte?: InputMaybe<Scalars['Bytes']>;
  x_lte?: InputMaybe<Scalars['Bytes']>;
  x_in?: InputMaybe<Array<Scalars['Bytes']>>;
  x_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  x_contains?: InputMaybe<Scalars['Bytes']>;
  x_not_contains?: InputMaybe<Scalars['Bytes']>;
  y?: InputMaybe<Scalars['Bytes']>;
  y_not?: InputMaybe<Scalars['Bytes']>;
  y_gt?: InputMaybe<Scalars['Bytes']>;
  y_lt?: InputMaybe<Scalars['Bytes']>;
  y_gte?: InputMaybe<Scalars['Bytes']>;
  y_lte?: InputMaybe<Scalars['Bytes']>;
  y_in?: InputMaybe<Array<Scalars['Bytes']>>;
  y_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  y_contains?: InputMaybe<Scalars['Bytes']>;
  y_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PubkeyChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'x'
  | 'y';

export type Registration = {
  id: Scalars['ID'];
  domain?: Maybe<Domain>;
  registrationDate: Scalars['BigInt'];
  expiryDate: Scalars['BigInt'];
  cost?: Maybe<Scalars['BigInt']>;
  registrant: Account;
  labelName?: Maybe<Scalars['String']>;
  events: Array<RegistrationEvent>;
};


export type RegistrationeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
};

export type RegistrationEvent = {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type RegistrationEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type RegistrationEvent_orderBy =
  | 'id'
  | 'registration'
  | 'blockNumber'
  | 'transactionID';

export type Registration_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  registrationDate?: InputMaybe<Scalars['BigInt']>;
  registrationDate_not?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrationDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost?: InputMaybe<Scalars['BigInt']>;
  cost_not?: InputMaybe<Scalars['BigInt']>;
  cost_gt?: InputMaybe<Scalars['BigInt']>;
  cost_lt?: InputMaybe<Scalars['BigInt']>;
  cost_gte?: InputMaybe<Scalars['BigInt']>;
  cost_lte?: InputMaybe<Scalars['BigInt']>;
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<RegistrationEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Registration_orderBy =
  | 'id'
  | 'domain'
  | 'registrationDate'
  | 'expiryDate'
  | 'cost'
  | 'registrant'
  | 'labelName'
  | 'events';

export type Resolver = {
  id: Scalars['ID'];
  domain?: Maybe<Domain>;
  address: Scalars['Bytes'];
  addr?: Maybe<Account>;
  contentHash?: Maybe<Scalars['Bytes']>;
  texts?: Maybe<Array<Scalars['String']>>;
  coinTypes?: Maybe<Array<Scalars['BigInt']>>;
  events: Array<ResolverEvent>;
};


export type ResolvereventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
};

export type ResolverEvent = {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type ResolverEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type ResolverEvent_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID';

export type Resolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Account_filter>;
  contentHash?: InputMaybe<Scalars['Bytes']>;
  contentHash_not?: InputMaybe<Scalars['Bytes']>;
  contentHash_gt?: InputMaybe<Scalars['Bytes']>;
  contentHash_lt?: InputMaybe<Scalars['Bytes']>;
  contentHash_gte?: InputMaybe<Scalars['Bytes']>;
  contentHash_lte?: InputMaybe<Scalars['Bytes']>;
  contentHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contentHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contentHash_contains?: InputMaybe<Scalars['Bytes']>;
  contentHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  texts?: InputMaybe<Array<Scalars['String']>>;
  texts_not?: InputMaybe<Array<Scalars['String']>>;
  texts_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  coinTypes?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<ResolverEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Resolver_orderBy =
  | 'id'
  | 'domain'
  | 'address'
  | 'addr'
  | 'contentHash'
  | 'texts'
  | 'coinTypes'
  | 'events';

export type TextChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  key: Scalars['String'];
};

export type TextChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  key?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TextChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'blockNumber'
  | 'transactionID'
  | 'key';

export type Transfer = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Account;
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Transfer_orderBy =
  | 'id'
  | 'domain'
  | 'blockNumber'
  | 'transactionID'
  | 'owner';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Name: ResolverTypeWrapper<Name>;
  NameSubscription: ResolverTypeWrapper<NameSubscription>;
  NameSubscription_filter: NameSubscription_filter;
  NameSubscription_orderBy: NameSubscription_orderBy;
  Name_filter: Name_filter;
  Name_orderBy: Name_orderBy;
  OrderDirection: OrderDirection;
  SRENSSubscription: ResolverTypeWrapper<SRENSSubscription>;
  SRENSSubscription_filter: SRENSSubscription_filter;
  SRENSSubscription_orderBy: SRENSSubscription_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubscribeEvent: ResolverTypeWrapper<SubscribeEvent>;
  SubscribeEvent_filter: SubscribeEvent_filter;
  SubscribeEvent_orderBy: SubscribeEvent_orderBy;
  SubscriptionEvent: ResolversTypes['SubscribeEvent'] | ResolversTypes['UnsubscribeEvent'];
  SubscriptionEvent_filter: SubscriptionEvent_filter;
  SubscriptionEvent_orderBy: SubscriptionEvent_orderBy;
  UnsubscribeEvent: ResolverTypeWrapper<UnsubscribeEvent>;
  UnsubscribeEvent_filter: UnsubscribeEvent_filter;
  UnsubscribeEvent_orderBy: UnsubscribeEvent_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  AbiChanged: ResolverTypeWrapper<AbiChanged>;
  AbiChanged_filter: AbiChanged_filter;
  AbiChanged_orderBy: AbiChanged_orderBy;
  Account: ResolverTypeWrapper<Account>;
  Account_filter: Account_filter;
  Account_orderBy: Account_orderBy;
  AddrChanged: ResolverTypeWrapper<AddrChanged>;
  AddrChanged_filter: AddrChanged_filter;
  AddrChanged_orderBy: AddrChanged_orderBy;
  AuthorisationChanged: ResolverTypeWrapper<AuthorisationChanged>;
  AuthorisationChanged_filter: AuthorisationChanged_filter;
  AuthorisationChanged_orderBy: AuthorisationChanged_orderBy;
  ContenthashChanged: ResolverTypeWrapper<ContenthashChanged>;
  ContenthashChanged_filter: ContenthashChanged_filter;
  ContenthashChanged_orderBy: ContenthashChanged_orderBy;
  Domain: ResolverTypeWrapper<Domain>;
  DomainEvent: ResolversTypes['NewOwner'] | ResolversTypes['NewResolver'] | ResolversTypes['NewTTL'] | ResolversTypes['Transfer'];
  DomainEvent_filter: DomainEvent_filter;
  DomainEvent_orderBy: DomainEvent_orderBy;
  Domain_filter: Domain_filter;
  Domain_orderBy: Domain_orderBy;
  InterfaceChanged: ResolverTypeWrapper<InterfaceChanged>;
  InterfaceChanged_filter: InterfaceChanged_filter;
  InterfaceChanged_orderBy: InterfaceChanged_orderBy;
  MulticoinAddrChanged: ResolverTypeWrapper<MulticoinAddrChanged>;
  MulticoinAddrChanged_filter: MulticoinAddrChanged_filter;
  MulticoinAddrChanged_orderBy: MulticoinAddrChanged_orderBy;
  NameChanged: ResolverTypeWrapper<NameChanged>;
  NameChanged_filter: NameChanged_filter;
  NameChanged_orderBy: NameChanged_orderBy;
  NameRegistered: ResolverTypeWrapper<NameRegistered>;
  NameRegistered_filter: NameRegistered_filter;
  NameRegistered_orderBy: NameRegistered_orderBy;
  NameRenewed: ResolverTypeWrapper<NameRenewed>;
  NameRenewed_filter: NameRenewed_filter;
  NameRenewed_orderBy: NameRenewed_orderBy;
  NameTransferred: ResolverTypeWrapper<NameTransferred>;
  NameTransferred_filter: NameTransferred_filter;
  NameTransferred_orderBy: NameTransferred_orderBy;
  NewOwner: ResolverTypeWrapper<NewOwner>;
  NewOwner_filter: NewOwner_filter;
  NewOwner_orderBy: NewOwner_orderBy;
  NewResolver: ResolverTypeWrapper<NewResolver>;
  NewResolver_filter: NewResolver_filter;
  NewResolver_orderBy: NewResolver_orderBy;
  NewTTL: ResolverTypeWrapper<NewTTL>;
  NewTTL_filter: NewTTL_filter;
  NewTTL_orderBy: NewTTL_orderBy;
  PubkeyChanged: ResolverTypeWrapper<PubkeyChanged>;
  PubkeyChanged_filter: PubkeyChanged_filter;
  PubkeyChanged_orderBy: PubkeyChanged_orderBy;
  Registration: ResolverTypeWrapper<Registration>;
  RegistrationEvent: ResolversTypes['NameRegistered'] | ResolversTypes['NameRenewed'] | ResolversTypes['NameTransferred'];
  RegistrationEvent_filter: RegistrationEvent_filter;
  RegistrationEvent_orderBy: RegistrationEvent_orderBy;
  Registration_filter: Registration_filter;
  Registration_orderBy: Registration_orderBy;
  Resolver: ResolverTypeWrapper<Resolver>;
  ResolverEvent: ResolversTypes['AbiChanged'] | ResolversTypes['AddrChanged'] | ResolversTypes['AuthorisationChanged'] | ResolversTypes['ContenthashChanged'] | ResolversTypes['InterfaceChanged'] | ResolversTypes['MulticoinAddrChanged'] | ResolversTypes['NameChanged'] | ResolversTypes['PubkeyChanged'] | ResolversTypes['TextChanged'];
  ResolverEvent_filter: ResolverEvent_filter;
  ResolverEvent_orderBy: ResolverEvent_orderBy;
  Resolver_filter: Resolver_filter;
  Resolver_orderBy: Resolver_orderBy;
  TextChanged: ResolverTypeWrapper<TextChanged>;
  TextChanged_filter: TextChanged_filter;
  TextChanged_orderBy: TextChanged_orderBy;
  Transfer: ResolverTypeWrapper<Transfer>;
  Transfer_filter: Transfer_filter;
  Transfer_orderBy: Transfer_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Name: Name;
  NameSubscription: NameSubscription;
  NameSubscription_filter: NameSubscription_filter;
  Name_filter: Name_filter;
  SRENSSubscription: SRENSSubscription;
  SRENSSubscription_filter: SRENSSubscription_filter;
  String: Scalars['String'];
  SubscribeEvent: SubscribeEvent;
  SubscribeEvent_filter: SubscribeEvent_filter;
  SubscriptionEvent: ResolversParentTypes['SubscribeEvent'] | ResolversParentTypes['UnsubscribeEvent'];
  SubscriptionEvent_filter: SubscriptionEvent_filter;
  UnsubscribeEvent: UnsubscribeEvent;
  UnsubscribeEvent_filter: UnsubscribeEvent_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  AbiChanged: AbiChanged;
  AbiChanged_filter: AbiChanged_filter;
  Account: Account;
  Account_filter: Account_filter;
  AddrChanged: AddrChanged;
  AddrChanged_filter: AddrChanged_filter;
  AuthorisationChanged: AuthorisationChanged;
  AuthorisationChanged_filter: AuthorisationChanged_filter;
  ContenthashChanged: ContenthashChanged;
  ContenthashChanged_filter: ContenthashChanged_filter;
  Domain: Domain;
  DomainEvent: ResolversParentTypes['NewOwner'] | ResolversParentTypes['NewResolver'] | ResolversParentTypes['NewTTL'] | ResolversParentTypes['Transfer'];
  DomainEvent_filter: DomainEvent_filter;
  Domain_filter: Domain_filter;
  InterfaceChanged: InterfaceChanged;
  InterfaceChanged_filter: InterfaceChanged_filter;
  MulticoinAddrChanged: MulticoinAddrChanged;
  MulticoinAddrChanged_filter: MulticoinAddrChanged_filter;
  NameChanged: NameChanged;
  NameChanged_filter: NameChanged_filter;
  NameRegistered: NameRegistered;
  NameRegistered_filter: NameRegistered_filter;
  NameRenewed: NameRenewed;
  NameRenewed_filter: NameRenewed_filter;
  NameTransferred: NameTransferred;
  NameTransferred_filter: NameTransferred_filter;
  NewOwner: NewOwner;
  NewOwner_filter: NewOwner_filter;
  NewResolver: NewResolver;
  NewResolver_filter: NewResolver_filter;
  NewTTL: NewTTL;
  NewTTL_filter: NewTTL_filter;
  PubkeyChanged: PubkeyChanged;
  PubkeyChanged_filter: PubkeyChanged_filter;
  Registration: Registration;
  RegistrationEvent: ResolversParentTypes['NameRegistered'] | ResolversParentTypes['NameRenewed'] | ResolversParentTypes['NameTransferred'];
  RegistrationEvent_filter: RegistrationEvent_filter;
  Registration_filter: Registration_filter;
  Resolver: Resolver;
  ResolverEvent: ResolversParentTypes['AbiChanged'] | ResolversParentTypes['AddrChanged'] | ResolversParentTypes['AuthorisationChanged'] | ResolversParentTypes['ContenthashChanged'] | ResolversParentTypes['InterfaceChanged'] | ResolversParentTypes['MulticoinAddrChanged'] | ResolversParentTypes['NameChanged'] | ResolversParentTypes['PubkeyChanged'] | ResolversParentTypes['TextChanged'];
  ResolverEvent_filter: ResolverEvent_filter;
  Resolver_filter: Resolver_filter;
  TextChanged: TextChanged;
  TextChanged_filter: TextChanged_filter;
  Transfer: Transfer;
  Transfer_filter: Transfer_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  subscription?: Resolver<Maybe<ResolversTypes['SRENSSubscription']>, ParentType, ContextType, RequireFields<QuerysubscriptionArgs, 'id' | 'subgraphError'>>;
  subscriptions?: Resolver<Array<ResolversTypes['SRENSSubscription']>, ParentType, ContextType, RequireFields<QuerysubscriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  name?: Resolver<Maybe<ResolversTypes['Name']>, ParentType, ContextType, RequireFields<QuerynameArgs, 'id' | 'subgraphError'>>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType, RequireFields<QuerynamesArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscribeEvent?: Resolver<Maybe<ResolversTypes['SubscribeEvent']>, ParentType, ContextType, RequireFields<QuerysubscribeEventArgs, 'id' | 'subgraphError'>>;
  subscribeEvents?: Resolver<Array<ResolversTypes['SubscribeEvent']>, ParentType, ContextType, RequireFields<QuerysubscribeEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unsubscribeEvent?: Resolver<Maybe<ResolversTypes['UnsubscribeEvent']>, ParentType, ContextType, RequireFields<QueryunsubscribeEventArgs, 'id' | 'subgraphError'>>;
  unsubscribeEvents?: Resolver<Array<ResolversTypes['UnsubscribeEvent']>, ParentType, ContextType, RequireFields<QueryunsubscribeEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionEvent?: Resolver<Maybe<ResolversTypes['SubscriptionEvent']>, ParentType, ContextType, RequireFields<QuerysubscriptionEventArgs, 'id' | 'subgraphError'>>;
  subscriptionEvents?: Resolver<Array<ResolversTypes['SubscriptionEvent']>, ParentType, ContextType, RequireFields<QuerysubscriptionEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<QuerydomainArgs, 'id' | 'subgraphError'>>;
  domains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<QuerydomainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransferArgs, 'id' | 'subgraphError'>>;
  transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newOwner?: Resolver<Maybe<ResolversTypes['NewOwner']>, ParentType, ContextType, RequireFields<QuerynewOwnerArgs, 'id' | 'subgraphError'>>;
  newOwners?: Resolver<Array<ResolversTypes['NewOwner']>, ParentType, ContextType, RequireFields<QuerynewOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newResolver?: Resolver<Maybe<ResolversTypes['NewResolver']>, ParentType, ContextType, RequireFields<QuerynewResolverArgs, 'id' | 'subgraphError'>>;
  newResolvers?: Resolver<Array<ResolversTypes['NewResolver']>, ParentType, ContextType, RequireFields<QuerynewResolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  newTTL?: Resolver<Maybe<ResolversTypes['NewTTL']>, ParentType, ContextType, RequireFields<QuerynewTTLArgs, 'id' | 'subgraphError'>>;
  newTTLs?: Resolver<Array<ResolversTypes['NewTTL']>, ParentType, ContextType, RequireFields<QuerynewTTLsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registration?: Resolver<Maybe<ResolversTypes['Registration']>, ParentType, ContextType, RequireFields<QueryregistrationArgs, 'id' | 'subgraphError'>>;
  registrations?: Resolver<Array<ResolversTypes['Registration']>, ParentType, ContextType, RequireFields<QueryregistrationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRegistered?: Resolver<Maybe<ResolversTypes['NameRegistered']>, ParentType, ContextType, RequireFields<QuerynameRegisteredArgs, 'id' | 'subgraphError'>>;
  nameRegistereds?: Resolver<Array<ResolversTypes['NameRegistered']>, ParentType, ContextType, RequireFields<QuerynameRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRenewed?: Resolver<Maybe<ResolversTypes['NameRenewed']>, ParentType, ContextType, RequireFields<QuerynameRenewedArgs, 'id' | 'subgraphError'>>;
  nameReneweds?: Resolver<Array<ResolversTypes['NameRenewed']>, ParentType, ContextType, RequireFields<QuerynameRenewedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameTransferred?: Resolver<Maybe<ResolversTypes['NameTransferred']>, ParentType, ContextType, RequireFields<QuerynameTransferredArgs, 'id' | 'subgraphError'>>;
  nameTransferreds?: Resolver<Array<ResolversTypes['NameTransferred']>, ParentType, ContextType, RequireFields<QuerynameTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolver?: Resolver<Maybe<ResolversTypes['Resolver']>, ParentType, ContextType, RequireFields<QueryresolverArgs, 'id' | 'subgraphError'>>;
  resolvers?: Resolver<Array<ResolversTypes['Resolver']>, ParentType, ContextType, RequireFields<QueryresolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  addrChanged?: Resolver<Maybe<ResolversTypes['AddrChanged']>, ParentType, ContextType, RequireFields<QueryaddrChangedArgs, 'id' | 'subgraphError'>>;
  addrChangeds?: Resolver<Array<ResolversTypes['AddrChanged']>, ParentType, ContextType, RequireFields<QueryaddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  multicoinAddrChanged?: Resolver<Maybe<ResolversTypes['MulticoinAddrChanged']>, ParentType, ContextType, RequireFields<QuerymulticoinAddrChangedArgs, 'id' | 'subgraphError'>>;
  multicoinAddrChangeds?: Resolver<Array<ResolversTypes['MulticoinAddrChanged']>, ParentType, ContextType, RequireFields<QuerymulticoinAddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameChanged?: Resolver<Maybe<ResolversTypes['NameChanged']>, ParentType, ContextType, RequireFields<QuerynameChangedArgs, 'id' | 'subgraphError'>>;
  nameChangeds?: Resolver<Array<ResolversTypes['NameChanged']>, ParentType, ContextType, RequireFields<QuerynameChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  abiChanged?: Resolver<Maybe<ResolversTypes['AbiChanged']>, ParentType, ContextType, RequireFields<QueryabiChangedArgs, 'id' | 'subgraphError'>>;
  abiChangeds?: Resolver<Array<ResolversTypes['AbiChanged']>, ParentType, ContextType, RequireFields<QueryabiChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pubkeyChanged?: Resolver<Maybe<ResolversTypes['PubkeyChanged']>, ParentType, ContextType, RequireFields<QuerypubkeyChangedArgs, 'id' | 'subgraphError'>>;
  pubkeyChangeds?: Resolver<Array<ResolversTypes['PubkeyChanged']>, ParentType, ContextType, RequireFields<QuerypubkeyChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  textChanged?: Resolver<Maybe<ResolversTypes['TextChanged']>, ParentType, ContextType, RequireFields<QuerytextChangedArgs, 'id' | 'subgraphError'>>;
  textChangeds?: Resolver<Array<ResolversTypes['TextChanged']>, ParentType, ContextType, RequireFields<QuerytextChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contenthashChanged?: Resolver<Maybe<ResolversTypes['ContenthashChanged']>, ParentType, ContextType, RequireFields<QuerycontenthashChangedArgs, 'id' | 'subgraphError'>>;
  contenthashChangeds?: Resolver<Array<ResolversTypes['ContenthashChanged']>, ParentType, ContextType, RequireFields<QuerycontenthashChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  interfaceChanged?: Resolver<Maybe<ResolversTypes['InterfaceChanged']>, ParentType, ContextType, RequireFields<QueryinterfaceChangedArgs, 'id' | 'subgraphError'>>;
  interfaceChangeds?: Resolver<Array<ResolversTypes['InterfaceChanged']>, ParentType, ContextType, RequireFields<QueryinterfaceChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorisationChanged?: Resolver<Maybe<ResolversTypes['AuthorisationChanged']>, ParentType, ContextType, RequireFields<QueryauthorisationChangedArgs, 'id' | 'subgraphError'>>;
  authorisationChangeds?: Resolver<Array<ResolversTypes['AuthorisationChanged']>, ParentType, ContextType, RequireFields<QueryauthorisationChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  domainEvent?: Resolver<Maybe<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<QuerydomainEventArgs, 'id' | 'subgraphError'>>;
  domainEvents?: Resolver<Array<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<QuerydomainEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registrationEvent?: Resolver<Maybe<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<QueryregistrationEventArgs, 'id' | 'subgraphError'>>;
  registrationEvents?: Resolver<Array<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<QueryregistrationEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolverEvent?: Resolver<Maybe<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<QueryresolverEventArgs, 'id' | 'subgraphError'>>;
  resolverEvents?: Resolver<Array<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<QueryresolverEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  srenssubscription?: SubscriptionResolver<Maybe<ResolversTypes['SRENSSubscription']>, "srenssubscription", ParentType, ContextType, RequireFields<SubscriptionsrenssubscriptionArgs, 'id' | 'subgraphError'>>;
  srenssubscriptions?: SubscriptionResolver<Array<ResolversTypes['SRENSSubscription']>, "srenssubscriptions", ParentType, ContextType, RequireFields<SubscriptionsrenssubscriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  name?: SubscriptionResolver<Maybe<ResolversTypes['Name']>, "name", ParentType, ContextType, RequireFields<SubscriptionnameArgs, 'id' | 'subgraphError'>>;
  names?: SubscriptionResolver<Array<ResolversTypes['Name']>, "names", ParentType, ContextType, RequireFields<SubscriptionnamesArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameSubscription?: SubscriptionResolver<Maybe<ResolversTypes['NameSubscription']>, "nameSubscription", ParentType, ContextType, RequireFields<SubscriptionnameSubscriptionArgs, 'id' | 'subgraphError'>>;
  nameSubscriptions?: SubscriptionResolver<Array<ResolversTypes['NameSubscription']>, "nameSubscriptions", ParentType, ContextType, RequireFields<SubscriptionnameSubscriptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscribeEvent?: SubscriptionResolver<Maybe<ResolversTypes['SubscribeEvent']>, "subscribeEvent", ParentType, ContextType, RequireFields<SubscriptionsubscribeEventArgs, 'id' | 'subgraphError'>>;
  subscribeEvents?: SubscriptionResolver<Array<ResolversTypes['SubscribeEvent']>, "subscribeEvents", ParentType, ContextType, RequireFields<SubscriptionsubscribeEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unsubscribeEvent?: SubscriptionResolver<Maybe<ResolversTypes['UnsubscribeEvent']>, "unsubscribeEvent", ParentType, ContextType, RequireFields<SubscriptionunsubscribeEventArgs, 'id' | 'subgraphError'>>;
  unsubscribeEvents?: SubscriptionResolver<Array<ResolversTypes['UnsubscribeEvent']>, "unsubscribeEvents", ParentType, ContextType, RequireFields<SubscriptionunsubscribeEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subscriptionEvent?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionEvent']>, "subscriptionEvent", ParentType, ContextType, RequireFields<SubscriptionsubscriptionEventArgs, 'id' | 'subgraphError'>>;
  subscriptionEvents?: SubscriptionResolver<Array<ResolversTypes['SubscriptionEvent']>, "subscriptionEvents", ParentType, ContextType, RequireFields<SubscriptionsubscriptionEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  domain?: SubscriptionResolver<Maybe<ResolversTypes['Domain']>, "domain", ParentType, ContextType, RequireFields<SubscriptiondomainArgs, 'id' | 'subgraphError'>>;
  domains?: SubscriptionResolver<Array<ResolversTypes['Domain']>, "domains", ParentType, ContextType, RequireFields<SubscriptiondomainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptiontransferArgs, 'id' | 'subgraphError'>>;
  transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptiontransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newOwner?: SubscriptionResolver<Maybe<ResolversTypes['NewOwner']>, "newOwner", ParentType, ContextType, RequireFields<SubscriptionnewOwnerArgs, 'id' | 'subgraphError'>>;
  newOwners?: SubscriptionResolver<Array<ResolversTypes['NewOwner']>, "newOwners", ParentType, ContextType, RequireFields<SubscriptionnewOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newResolver?: SubscriptionResolver<Maybe<ResolversTypes['NewResolver']>, "newResolver", ParentType, ContextType, RequireFields<SubscriptionnewResolverArgs, 'id' | 'subgraphError'>>;
  newResolvers?: SubscriptionResolver<Array<ResolversTypes['NewResolver']>, "newResolvers", ParentType, ContextType, RequireFields<SubscriptionnewResolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  newTTL?: SubscriptionResolver<Maybe<ResolversTypes['NewTTL']>, "newTTL", ParentType, ContextType, RequireFields<SubscriptionnewTTLArgs, 'id' | 'subgraphError'>>;
  newTTLs?: SubscriptionResolver<Array<ResolversTypes['NewTTL']>, "newTTLs", ParentType, ContextType, RequireFields<SubscriptionnewTTLsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registration?: SubscriptionResolver<Maybe<ResolversTypes['Registration']>, "registration", ParentType, ContextType, RequireFields<SubscriptionregistrationArgs, 'id' | 'subgraphError'>>;
  registrations?: SubscriptionResolver<Array<ResolversTypes['Registration']>, "registrations", ParentType, ContextType, RequireFields<SubscriptionregistrationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRegistered?: SubscriptionResolver<Maybe<ResolversTypes['NameRegistered']>, "nameRegistered", ParentType, ContextType, RequireFields<SubscriptionnameRegisteredArgs, 'id' | 'subgraphError'>>;
  nameRegistereds?: SubscriptionResolver<Array<ResolversTypes['NameRegistered']>, "nameRegistereds", ParentType, ContextType, RequireFields<SubscriptionnameRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRenewed?: SubscriptionResolver<Maybe<ResolversTypes['NameRenewed']>, "nameRenewed", ParentType, ContextType, RequireFields<SubscriptionnameRenewedArgs, 'id' | 'subgraphError'>>;
  nameReneweds?: SubscriptionResolver<Array<ResolversTypes['NameRenewed']>, "nameReneweds", ParentType, ContextType, RequireFields<SubscriptionnameRenewedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameTransferred?: SubscriptionResolver<Maybe<ResolversTypes['NameTransferred']>, "nameTransferred", ParentType, ContextType, RequireFields<SubscriptionnameTransferredArgs, 'id' | 'subgraphError'>>;
  nameTransferreds?: SubscriptionResolver<Array<ResolversTypes['NameTransferred']>, "nameTransferreds", ParentType, ContextType, RequireFields<SubscriptionnameTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolver?: SubscriptionResolver<Maybe<ResolversTypes['Resolver']>, "resolver", ParentType, ContextType, RequireFields<SubscriptionresolverArgs, 'id' | 'subgraphError'>>;
  resolvers?: SubscriptionResolver<Array<ResolversTypes['Resolver']>, "resolvers", ParentType, ContextType, RequireFields<SubscriptionresolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  addrChanged?: SubscriptionResolver<Maybe<ResolversTypes['AddrChanged']>, "addrChanged", ParentType, ContextType, RequireFields<SubscriptionaddrChangedArgs, 'id' | 'subgraphError'>>;
  addrChangeds?: SubscriptionResolver<Array<ResolversTypes['AddrChanged']>, "addrChangeds", ParentType, ContextType, RequireFields<SubscriptionaddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  multicoinAddrChanged?: SubscriptionResolver<Maybe<ResolversTypes['MulticoinAddrChanged']>, "multicoinAddrChanged", ParentType, ContextType, RequireFields<SubscriptionmulticoinAddrChangedArgs, 'id' | 'subgraphError'>>;
  multicoinAddrChangeds?: SubscriptionResolver<Array<ResolversTypes['MulticoinAddrChanged']>, "multicoinAddrChangeds", ParentType, ContextType, RequireFields<SubscriptionmulticoinAddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameChanged?: SubscriptionResolver<Maybe<ResolversTypes['NameChanged']>, "nameChanged", ParentType, ContextType, RequireFields<SubscriptionnameChangedArgs, 'id' | 'subgraphError'>>;
  nameChangeds?: SubscriptionResolver<Array<ResolversTypes['NameChanged']>, "nameChangeds", ParentType, ContextType, RequireFields<SubscriptionnameChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  abiChanged?: SubscriptionResolver<Maybe<ResolversTypes['AbiChanged']>, "abiChanged", ParentType, ContextType, RequireFields<SubscriptionabiChangedArgs, 'id' | 'subgraphError'>>;
  abiChangeds?: SubscriptionResolver<Array<ResolversTypes['AbiChanged']>, "abiChangeds", ParentType, ContextType, RequireFields<SubscriptionabiChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pubkeyChanged?: SubscriptionResolver<Maybe<ResolversTypes['PubkeyChanged']>, "pubkeyChanged", ParentType, ContextType, RequireFields<SubscriptionpubkeyChangedArgs, 'id' | 'subgraphError'>>;
  pubkeyChangeds?: SubscriptionResolver<Array<ResolversTypes['PubkeyChanged']>, "pubkeyChangeds", ParentType, ContextType, RequireFields<SubscriptionpubkeyChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  textChanged?: SubscriptionResolver<Maybe<ResolversTypes['TextChanged']>, "textChanged", ParentType, ContextType, RequireFields<SubscriptiontextChangedArgs, 'id' | 'subgraphError'>>;
  textChangeds?: SubscriptionResolver<Array<ResolversTypes['TextChanged']>, "textChangeds", ParentType, ContextType, RequireFields<SubscriptiontextChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contenthashChanged?: SubscriptionResolver<Maybe<ResolversTypes['ContenthashChanged']>, "contenthashChanged", ParentType, ContextType, RequireFields<SubscriptioncontenthashChangedArgs, 'id' | 'subgraphError'>>;
  contenthashChangeds?: SubscriptionResolver<Array<ResolversTypes['ContenthashChanged']>, "contenthashChangeds", ParentType, ContextType, RequireFields<SubscriptioncontenthashChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  interfaceChanged?: SubscriptionResolver<Maybe<ResolversTypes['InterfaceChanged']>, "interfaceChanged", ParentType, ContextType, RequireFields<SubscriptioninterfaceChangedArgs, 'id' | 'subgraphError'>>;
  interfaceChangeds?: SubscriptionResolver<Array<ResolversTypes['InterfaceChanged']>, "interfaceChangeds", ParentType, ContextType, RequireFields<SubscriptioninterfaceChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorisationChanged?: SubscriptionResolver<Maybe<ResolversTypes['AuthorisationChanged']>, "authorisationChanged", ParentType, ContextType, RequireFields<SubscriptionauthorisationChangedArgs, 'id' | 'subgraphError'>>;
  authorisationChangeds?: SubscriptionResolver<Array<ResolversTypes['AuthorisationChanged']>, "authorisationChangeds", ParentType, ContextType, RequireFields<SubscriptionauthorisationChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  domainEvent?: SubscriptionResolver<Maybe<ResolversTypes['DomainEvent']>, "domainEvent", ParentType, ContextType, RequireFields<SubscriptiondomainEventArgs, 'id' | 'subgraphError'>>;
  domainEvents?: SubscriptionResolver<Array<ResolversTypes['DomainEvent']>, "domainEvents", ParentType, ContextType, RequireFields<SubscriptiondomainEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registrationEvent?: SubscriptionResolver<Maybe<ResolversTypes['RegistrationEvent']>, "registrationEvent", ParentType, ContextType, RequireFields<SubscriptionregistrationEventArgs, 'id' | 'subgraphError'>>;
  registrationEvents?: SubscriptionResolver<Array<ResolversTypes['RegistrationEvent']>, "registrationEvents", ParentType, ContextType, RequireFields<SubscriptionregistrationEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolverEvent?: SubscriptionResolver<Maybe<ResolversTypes['ResolverEvent']>, "resolverEvent", ParentType, ContextType, RequireFields<SubscriptionresolverEventArgs, 'id' | 'subgraphError'>>;
  resolverEvents?: SubscriptionResolver<Array<ResolversTypes['ResolverEvent']>, "resolverEvents", ParentType, ContextType, RequireFields<SubscriptionresolverEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type NameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Name'] = ResolversParentTypes['Name']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subscriptions?: Resolver<Array<ResolversTypes['NameSubscription']>, ParentType, ContextType, RequireFields<NamesubscriptionsArgs, 'skip' | 'first'>>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameSubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameSubscription'] = ResolversParentTypes['NameSubscription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscription?: Resolver<ResolversTypes['SRENSSubscription'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Name'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SRENSSubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SRENSSubscription'] = ResolversParentTypes['SRENSSubscription']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['NameSubscription']>, ParentType, ContextType, RequireFields<SRENSSubscriptionnamesArgs, 'skip' | 'first'>>;
  events?: Resolver<Array<ResolversTypes['SubscriptionEvent']>, ParentType, ContextType, RequireFields<SRENSSubscriptioneventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscribeEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubscribeEvent'] = ResolversParentTypes['SubscribeEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['SRENSSubscription'], ParentType, ContextType>;
  indexedName?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubscriptionEvent'] = ResolversParentTypes['SubscriptionEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'SubscribeEvent' | 'UnsubscribeEvent', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['SRENSSubscription'], ParentType, ContextType>;
  indexedName?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
}>;

export type UnsubscribeEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnsubscribeEvent'] = ResolversParentTypes['UnsubscribeEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  subscriber?: Resolver<ResolversTypes['SRENSSubscription'], ParentType, ContextType>;
  indexedName?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AbiChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AbiChanged'] = ResolversParentTypes['AbiChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<AccountdomainsArgs, 'skip' | 'first'>>;
  registrations?: Resolver<Maybe<Array<ResolversTypes['Registration']>>, ParentType, ContextType, RequireFields<AccountregistrationsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddrChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddrChanged'] = ResolversParentTypes['AddrChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addr?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorisationChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorisationChanged'] = ResolversParentTypes['AuthorisationChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isAuthorized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContenthashChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContenthashChanged'] = ResolversParentTypes['ContenthashChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DomainResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Domain'] = ResolversParentTypes['Domain']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelhash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  subdomains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<DomainsubdomainsArgs, 'skip' | 'first'>>;
  subdomainCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  resolvedAddress?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  resolver?: Resolver<Maybe<ResolversTypes['Resolver']>, ParentType, ContextType>;
  ttl?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isMigrated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<DomaineventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DomainEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DomainEvent'] = ResolversParentTypes['DomainEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NewOwner' | 'NewResolver' | 'NewTTL' | 'Transfer', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export type InterfaceChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InterfaceChanged'] = ResolversParentTypes['InterfaceChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  interfaceID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  implementer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MulticoinAddrChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MulticoinAddrChanged'] = ResolversParentTypes['MulticoinAddrChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  coinType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  addr?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameChanged'] = ResolversParentTypes['NameChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameRegisteredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameRegistered'] = ResolversParentTypes['NameRegistered']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  registrant?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameRenewedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameRenewed'] = ResolversParentTypes['NameRenewed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameTransferred'] = ResolversParentTypes['NameTransferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newOwner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewOwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewOwner'] = ResolversParentTypes['NewOwner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parentDomain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewResolverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewResolver'] = ResolversParentTypes['NewResolver']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewTTLResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewTTL'] = ResolversParentTypes['NewTTL']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ttl?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PubkeyChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PubkeyChanged'] = ResolversParentTypes['PubkeyChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegistrationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Registration'] = ResolversParentTypes['Registration']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  registrationDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  registrant?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  labelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<RegistrationeventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegistrationEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegistrationEvent'] = ResolversParentTypes['RegistrationEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NameRegistered' | 'NameRenewed' | 'NameTransferred', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export type ResolverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Resolver'] = ResolversParentTypes['Resolver']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addr?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  contentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  texts?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  coinTypes?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<ResolvereventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResolverEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResolverEvent'] = ResolversParentTypes['ResolverEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AbiChanged' | 'AddrChanged' | 'AuthorisationChanged' | 'ContenthashChanged' | 'InterfaceChanged' | 'MulticoinAddrChanged' | 'NameChanged' | 'PubkeyChanged' | 'TextChanged', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export type TextChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TextChanged'] = ResolversParentTypes['TextChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Name?: NameResolvers<ContextType>;
  NameSubscription?: NameSubscriptionResolvers<ContextType>;
  SRENSSubscription?: SRENSSubscriptionResolvers<ContextType>;
  SubscribeEvent?: SubscribeEventResolvers<ContextType>;
  SubscriptionEvent?: SubscriptionEventResolvers<ContextType>;
  UnsubscribeEvent?: UnsubscribeEventResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  AbiChanged?: AbiChangedResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  AddrChanged?: AddrChangedResolvers<ContextType>;
  AuthorisationChanged?: AuthorisationChangedResolvers<ContextType>;
  ContenthashChanged?: ContenthashChangedResolvers<ContextType>;
  Domain?: DomainResolvers<ContextType>;
  DomainEvent?: DomainEventResolvers<ContextType>;
  InterfaceChanged?: InterfaceChangedResolvers<ContextType>;
  MulticoinAddrChanged?: MulticoinAddrChangedResolvers<ContextType>;
  NameChanged?: NameChangedResolvers<ContextType>;
  NameRegistered?: NameRegisteredResolvers<ContextType>;
  NameRenewed?: NameRenewedResolvers<ContextType>;
  NameTransferred?: NameTransferredResolvers<ContextType>;
  NewOwner?: NewOwnerResolvers<ContextType>;
  NewResolver?: NewResolverResolvers<ContextType>;
  NewTTL?: NewTTLResolvers<ContextType>;
  PubkeyChanged?: PubkeyChangedResolvers<ContextType>;
  Registration?: RegistrationResolvers<ContextType>;
  RegistrationEvent?: RegistrationEventResolvers<ContextType>;
  Resolver?: ResolverResolvers<ContextType>;
  ResolverEvent?: ResolverEventResolvers<ContextType>;
  TextChanged?: TextChangedResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = SelfRepayingEnsTypes.Context & EnsTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "graphclient build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".graphclient",
    configName: "graphclient",
    additionalPackagePrefixes: ["@graphprotocol/client-"],
    initialLoggerPrefix: "GraphClient",
  });
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));