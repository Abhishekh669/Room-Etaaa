
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model UserRequest
 * 
 */
export type UserRequest = $Result.DefaultSelection<Prisma.$UserRequestPayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomBilling
 * 
 */
export type RoomBilling = $Result.DefaultSelection<Prisma.$RoomBillingPayload>
/**
 * Model RoomPaymentRecord
 * 
 */
export type RoomPaymentRecord = $Result.DefaultSelection<Prisma.$RoomPaymentRecordPayload>
/**
 * Model PaymentHistory
 * 
 */
export type PaymentHistory = $Result.DefaultSelection<Prisma.$PaymentHistoryPayload>
/**
 * Model SavedPost
 * 
 */
export type SavedPost = $Result.DefaultSelection<Prisma.$SavedPostPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model PostViewCount
 * 
 */
export type PostViewCount = $Result.DefaultSelection<Prisma.$PostViewCountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  OWNER: 'OWNER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const SubscriptionType: {
  FREE: 'FREE',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  CANCELED: 'CANCELED',
  EXPIRED: 'EXPIRED',
  PENDING: 'PENDING'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const RoomStatus: {
  VACANT: 'VACANT',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const RoomType: {
  FLAT: 'FLAT',
  ROOM: 'ROOM',
  SHUTTER: 'SHUTTER'
};

export type RoomType = (typeof RoomType)[keyof typeof RoomType]


export const RoomFor: {
  STUDENTS: 'STUDENTS',
  FAMILY: 'FAMILY',
  BUSINESS: 'BUSINESS'
};

export type RoomFor = (typeof RoomFor)[keyof typeof RoomFor]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type SubscriptionType = $Enums.SubscriptionType

export const SubscriptionType: typeof $Enums.SubscriptionType

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type RoomType = $Enums.RoomType

export const RoomType: typeof $Enums.RoomType

export type RoomFor = $Enums.RoomFor

export const RoomFor: typeof $Enums.RoomFor

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRequest`: Exposes CRUD operations for the **UserRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRequests
    * const userRequests = await prisma.userRequest.findMany()
    * ```
    */
  get userRequest(): Prisma.UserRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomBilling`: Exposes CRUD operations for the **RoomBilling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomBillings
    * const roomBillings = await prisma.roomBilling.findMany()
    * ```
    */
  get roomBilling(): Prisma.RoomBillingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomPaymentRecord`: Exposes CRUD operations for the **RoomPaymentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomPaymentRecords
    * const roomPaymentRecords = await prisma.roomPaymentRecord.findMany()
    * ```
    */
  get roomPaymentRecord(): Prisma.RoomPaymentRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentHistory`: Exposes CRUD operations for the **PaymentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentHistories
    * const paymentHistories = await prisma.paymentHistory.findMany()
    * ```
    */
  get paymentHistory(): Prisma.PaymentHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedPost`: Exposes CRUD operations for the **SavedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedPosts
    * const savedPosts = await prisma.savedPost.findMany()
    * ```
    */
  get savedPost(): Prisma.SavedPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postViewCount`: Exposes CRUD operations for the **PostViewCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostViewCounts
    * const postViewCounts = await prisma.postViewCount.findMany()
    * ```
    */
  get postViewCount(): Prisma.PostViewCountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    UserRequest: 'UserRequest',
    SubscriptionPlan: 'SubscriptionPlan',
    Room: 'Room',
    RoomBilling: 'RoomBilling',
    RoomPaymentRecord: 'RoomPaymentRecord',
    PaymentHistory: 'PaymentHistory',
    SavedPost: 'SavedPost',
    Posts: 'Posts',
    PostViewCount: 'PostViewCount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "userRequest" | "subscriptionPlan" | "room" | "roomBilling" | "roomPaymentRecord" | "paymentHistory" | "savedPost" | "posts" | "postViewCount"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      UserRequest: {
        payload: Prisma.$UserRequestPayload<ExtArgs>
        fields: Prisma.UserRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload>
          }
          findFirst: {
            args: Prisma.UserRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload>
          }
          findMany: {
            args: Prisma.UserRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload>[]
          }
          create: {
            args: Prisma.UserRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload>
          }
          createMany: {
            args: Prisma.UserRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload>
          }
          update: {
            args: Prisma.UserRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload>
          }
          deleteMany: {
            args: Prisma.UserRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRequestPayload>
          }
          aggregate: {
            args: Prisma.UserRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRequest>
          }
          groupBy: {
            args: Prisma.UserRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserRequestCountArgs<ExtArgs>
            result: $Utils.Optional<UserRequestCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubscriptionPlanFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubscriptionPlanAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoomFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoomAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomBilling: {
        payload: Prisma.$RoomBillingPayload<ExtArgs>
        fields: Prisma.RoomBillingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomBillingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomBillingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload>
          }
          findFirst: {
            args: Prisma.RoomBillingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomBillingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload>
          }
          findMany: {
            args: Prisma.RoomBillingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload>[]
          }
          create: {
            args: Prisma.RoomBillingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload>
          }
          createMany: {
            args: Prisma.RoomBillingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomBillingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload>
          }
          update: {
            args: Prisma.RoomBillingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload>
          }
          deleteMany: {
            args: Prisma.RoomBillingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomBillingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomBillingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomBillingPayload>
          }
          aggregate: {
            args: Prisma.RoomBillingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomBilling>
          }
          groupBy: {
            args: Prisma.RoomBillingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomBillingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoomBillingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoomBillingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoomBillingCountArgs<ExtArgs>
            result: $Utils.Optional<RoomBillingCountAggregateOutputType> | number
          }
        }
      }
      RoomPaymentRecord: {
        payload: Prisma.$RoomPaymentRecordPayload<ExtArgs>
        fields: Prisma.RoomPaymentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomPaymentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomPaymentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload>
          }
          findFirst: {
            args: Prisma.RoomPaymentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomPaymentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload>
          }
          findMany: {
            args: Prisma.RoomPaymentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload>[]
          }
          create: {
            args: Prisma.RoomPaymentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload>
          }
          createMany: {
            args: Prisma.RoomPaymentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomPaymentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload>
          }
          update: {
            args: Prisma.RoomPaymentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload>
          }
          deleteMany: {
            args: Prisma.RoomPaymentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomPaymentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomPaymentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPaymentRecordPayload>
          }
          aggregate: {
            args: Prisma.RoomPaymentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomPaymentRecord>
          }
          groupBy: {
            args: Prisma.RoomPaymentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomPaymentRecordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoomPaymentRecordFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoomPaymentRecordAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoomPaymentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<RoomPaymentRecordCountAggregateOutputType> | number
          }
        }
      }
      PaymentHistory: {
        payload: Prisma.$PaymentHistoryPayload<ExtArgs>
        fields: Prisma.PaymentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findFirst: {
            args: Prisma.PaymentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findMany: {
            args: Prisma.PaymentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          create: {
            args: Prisma.PaymentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          createMany: {
            args: Prisma.PaymentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          update: {
            args: Prisma.PaymentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PaymentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          aggregate: {
            args: Prisma.PaymentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentHistory>
          }
          groupBy: {
            args: Prisma.PaymentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PaymentHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaymentHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PaymentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryCountAggregateOutputType> | number
          }
        }
      }
      SavedPost: {
        payload: Prisma.$SavedPostPayload<ExtArgs>
        fields: Prisma.SavedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findFirst: {
            args: Prisma.SavedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          findMany: {
            args: Prisma.SavedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>[]
          }
          create: {
            args: Prisma.SavedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          createMany: {
            args: Prisma.SavedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          update: {
            args: Prisma.SavedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          deleteMany: {
            args: Prisma.SavedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedPostPayload>
          }
          aggregate: {
            args: Prisma.SavedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedPost>
          }
          groupBy: {
            args: Prisma.SavedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SavedPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SavedPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SavedPostCountArgs<ExtArgs>
            result: $Utils.Optional<SavedPostCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      PostViewCount: {
        payload: Prisma.$PostViewCountPayload<ExtArgs>
        fields: Prisma.PostViewCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostViewCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostViewCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload>
          }
          findFirst: {
            args: Prisma.PostViewCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostViewCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload>
          }
          findMany: {
            args: Prisma.PostViewCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload>[]
          }
          create: {
            args: Prisma.PostViewCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload>
          }
          createMany: {
            args: Prisma.PostViewCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostViewCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload>
          }
          update: {
            args: Prisma.PostViewCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload>
          }
          deleteMany: {
            args: Prisma.PostViewCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostViewCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostViewCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewCountPayload>
          }
          aggregate: {
            args: Prisma.PostViewCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostViewCount>
          }
          groupBy: {
            args: Prisma.PostViewCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostViewCountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostViewCountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostViewCountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PostViewCountCountArgs<ExtArgs>
            result: $Utils.Optional<PostViewCountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    userRequest?: UserRequestOmit
    subscriptionPlan?: SubscriptionPlanOmit
    room?: RoomOmit
    roomBilling?: RoomBillingOmit
    roomPaymentRecord?: RoomPaymentRecordOmit
    paymentHistory?: PaymentHistoryOmit
    savedPost?: SavedPostOmit
    posts?: PostsOmit
    postViewCount?: PostViewCountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    userRequest: number
    subscriptionPlan: number
    room: number
    roomBilling: number
    paymentHistory: number
    client: number
    roomPaymentRecord: number
    payedBy: number
    posts: number
    savedPost: number
    postViewCount: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    userRequest?: boolean | UserCountOutputTypeCountUserRequestArgs
    subscriptionPlan?: boolean | UserCountOutputTypeCountSubscriptionPlanArgs
    room?: boolean | UserCountOutputTypeCountRoomArgs
    roomBilling?: boolean | UserCountOutputTypeCountRoomBillingArgs
    paymentHistory?: boolean | UserCountOutputTypeCountPaymentHistoryArgs
    client?: boolean | UserCountOutputTypeCountClientArgs
    roomPaymentRecord?: boolean | UserCountOutputTypeCountRoomPaymentRecordArgs
    payedBy?: boolean | UserCountOutputTypeCountPayedByArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    savedPost?: boolean | UserCountOutputTypeCountSavedPostArgs
    postViewCount?: boolean | UserCountOutputTypeCountPostViewCountArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomBillingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomBillingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomPaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPaymentRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPaymentRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewCountWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    roomPayment: number
    roomPaymentRecord: number
    posts: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomPayment?: boolean | RoomCountOutputTypeCountRoomPaymentArgs
    roomPaymentRecord?: boolean | RoomCountOutputTypeCountRoomPaymentRecordArgs
    posts?: boolean | RoomCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountRoomPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountRoomPaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPaymentRecordWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    savedPost: number
    totalCount: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedPost?: boolean | PostsCountOutputTypeCountSavedPostArgs
    totalCount?: boolean | PostsCountOutputTypeCountTotalCountArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountSavedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountTotalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewCountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    phoneNumber: string | null
    role: $Enums.UserRole | null
    isOnboarded: boolean | null
    isVerified: boolean | null
    isAssignedOwner: boolean | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    phoneNumber: string | null
    role: $Enums.UserRole | null
    isOnboarded: boolean | null
    isVerified: boolean | null
    isAssignedOwner: boolean | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    phoneNumber: number
    role: number
    isOnboarded: number
    isVerified: number
    isAssignedOwner: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    phoneNumber?: true
    role?: true
    isOnboarded?: true
    isVerified?: true
    isAssignedOwner?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    phoneNumber?: true
    role?: true
    isOnboarded?: true
    isVerified?: true
    isAssignedOwner?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    phoneNumber?: true
    role?: true
    isOnboarded?: true
    isVerified?: true
    isAssignedOwner?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    phoneNumber: string | null
    role: $Enums.UserRole
    isOnboarded: boolean
    isVerified: boolean
    isAssignedOwner: boolean
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    phoneNumber?: boolean
    role?: boolean
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    userRequest?: boolean | User$userRequestArgs<ExtArgs>
    subscriptionPlan?: boolean | User$subscriptionPlanArgs<ExtArgs>
    room?: boolean | User$roomArgs<ExtArgs>
    roomBilling?: boolean | User$roomBillingArgs<ExtArgs>
    paymentHistory?: boolean | User$paymentHistoryArgs<ExtArgs>
    client?: boolean | User$clientArgs<ExtArgs>
    roomPaymentRecord?: boolean | User$roomPaymentRecordArgs<ExtArgs>
    payedBy?: boolean | User$payedByArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    savedPost?: boolean | User$savedPostArgs<ExtArgs>
    postViewCount?: boolean | User$postViewCountArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    phoneNumber?: boolean
    role?: boolean
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "phoneNumber" | "role" | "isOnboarded" | "isVerified" | "isAssignedOwner" | "isAdmin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    userRequest?: boolean | User$userRequestArgs<ExtArgs>
    subscriptionPlan?: boolean | User$subscriptionPlanArgs<ExtArgs>
    room?: boolean | User$roomArgs<ExtArgs>
    roomBilling?: boolean | User$roomBillingArgs<ExtArgs>
    paymentHistory?: boolean | User$paymentHistoryArgs<ExtArgs>
    client?: boolean | User$clientArgs<ExtArgs>
    roomPaymentRecord?: boolean | User$roomPaymentRecordArgs<ExtArgs>
    payedBy?: boolean | User$payedByArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    savedPost?: boolean | User$savedPostArgs<ExtArgs>
    postViewCount?: boolean | User$postViewCountArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      userRequest: Prisma.$UserRequestPayload<ExtArgs>[]
      subscriptionPlan: Prisma.$SubscriptionPlanPayload<ExtArgs>[]
      room: Prisma.$RoomPayload<ExtArgs>[]
      roomBilling: Prisma.$RoomBillingPayload<ExtArgs>[]
      paymentHistory: Prisma.$PaymentHistoryPayload<ExtArgs>[]
      client: Prisma.$PaymentHistoryPayload<ExtArgs>[]
      roomPaymentRecord: Prisma.$RoomPaymentRecordPayload<ExtArgs>[]
      payedBy: Prisma.$RoomPaymentRecordPayload<ExtArgs>[]
      posts: Prisma.$PostsPayload<ExtArgs>[]
      savedPost: Prisma.$SavedPostPayload<ExtArgs>[]
      postViewCount: Prisma.$PostViewCountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      phoneNumber: string | null
      role: $Enums.UserRole
      isOnboarded: boolean
      isVerified: boolean
      isAssignedOwner: boolean
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRequest<T extends User$userRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$userRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptionPlan<T extends User$subscriptionPlanArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionPlanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room<T extends User$roomArgs<ExtArgs> = {}>(args?: Subset<T, User$roomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomBilling<T extends User$roomBillingArgs<ExtArgs> = {}>(args?: Subset<T, User$roomBillingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentHistory<T extends User$paymentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    client<T extends User$clientArgs<ExtArgs> = {}>(args?: Subset<T, User$clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomPaymentRecord<T extends User$roomPaymentRecordArgs<ExtArgs> = {}>(args?: Subset<T, User$roomPaymentRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payedBy<T extends User$payedByArgs<ExtArgs> = {}>(args?: Subset<T, User$payedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedPost<T extends User$savedPostArgs<ExtArgs> = {}>(args?: Subset<T, User$savedPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postViewCount<T extends User$postViewCountArgs<ExtArgs> = {}>(args?: Subset<T, User$postViewCountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isOnboarded: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isAssignedOwner: FieldRef<"User", 'Boolean'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.userRequest
   */
  export type User$userRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    where?: UserRequestWhereInput
    orderBy?: UserRequestOrderByWithRelationInput | UserRequestOrderByWithRelationInput[]
    cursor?: UserRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRequestScalarFieldEnum | UserRequestScalarFieldEnum[]
  }

  /**
   * User.subscriptionPlan
   */
  export type User$subscriptionPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    cursor?: SubscriptionPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * User.room
   */
  export type User$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.roomBilling
   */
  export type User$roomBillingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    where?: RoomBillingWhereInput
    orderBy?: RoomBillingOrderByWithRelationInput | RoomBillingOrderByWithRelationInput[]
    cursor?: RoomBillingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomBillingScalarFieldEnum | RoomBillingScalarFieldEnum[]
  }

  /**
   * User.paymentHistory
   */
  export type User$paymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * User.client
   */
  export type User$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * User.roomPaymentRecord
   */
  export type User$roomPaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    where?: RoomPaymentRecordWhereInput
    orderBy?: RoomPaymentRecordOrderByWithRelationInput | RoomPaymentRecordOrderByWithRelationInput[]
    cursor?: RoomPaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomPaymentRecordScalarFieldEnum | RoomPaymentRecordScalarFieldEnum[]
  }

  /**
   * User.payedBy
   */
  export type User$payedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    where?: RoomPaymentRecordWhereInput
    orderBy?: RoomPaymentRecordOrderByWithRelationInput | RoomPaymentRecordOrderByWithRelationInput[]
    cursor?: RoomPaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomPaymentRecordScalarFieldEnum | RoomPaymentRecordScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * User.savedPost
   */
  export type User$savedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * User.postViewCount
   */
  export type User$postViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    where?: PostViewCountWhereInput
    orderBy?: PostViewCountOrderByWithRelationInput | PostViewCountOrderByWithRelationInput[]
    cursor?: PostViewCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostViewCountScalarFieldEnum | PostViewCountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model UserRequest
   */

  export type AggregateUserRequest = {
    _count: UserRequestCountAggregateOutputType | null
    _min: UserRequestMinAggregateOutputType | null
    _max: UserRequestMaxAggregateOutputType | null
  }

  export type UserRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    requestedRole: $Enums.UserRole | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    requestedRole: $Enums.UserRole | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserRequestCountAggregateOutputType = {
    id: number
    userId: number
    requestedRole: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserRequestMinAggregateInputType = {
    id?: true
    userId?: true
    requestedRole?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    requestedRole?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserRequestCountAggregateInputType = {
    id?: true
    userId?: true
    requestedRole?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRequest to aggregate.
     */
    where?: UserRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRequests to fetch.
     */
    orderBy?: UserRequestOrderByWithRelationInput | UserRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRequests
    **/
    _count?: true | UserRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRequestMaxAggregateInputType
  }

  export type GetUserRequestAggregateType<T extends UserRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRequest[P]>
      : GetScalarType<T[P], AggregateUserRequest[P]>
  }




  export type UserRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRequestWhereInput
    orderBy?: UserRequestOrderByWithAggregationInput | UserRequestOrderByWithAggregationInput[]
    by: UserRequestScalarFieldEnum[] | UserRequestScalarFieldEnum
    having?: UserRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRequestCountAggregateInputType | true
    _min?: UserRequestMinAggregateInputType
    _max?: UserRequestMaxAggregateInputType
  }

  export type UserRequestGroupByOutputType = {
    id: string
    userId: string
    requestedRole: $Enums.UserRole
    updatedAt: Date
    createdAt: Date
    _count: UserRequestCountAggregateOutputType | null
    _min: UserRequestMinAggregateOutputType | null
    _max: UserRequestMaxAggregateOutputType | null
  }

  type GetUserRequestGroupByPayload<T extends UserRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRequestGroupByOutputType[P]>
            : GetScalarType<T[P], UserRequestGroupByOutputType[P]>
        }
      >
    >


  export type UserRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    requestedRole?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRequest"]>



  export type UserRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    requestedRole?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type UserRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "requestedRole" | "updatedAt" | "createdAt", ExtArgs["result"]["userRequest"]>
  export type UserRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      requestedRole: $Enums.UserRole
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userRequest"]>
    composites: {}
  }

  type UserRequestGetPayload<S extends boolean | null | undefined | UserRequestDefaultArgs> = $Result.GetResult<Prisma.$UserRequestPayload, S>

  type UserRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRequestCountAggregateInputType | true
    }

  export interface UserRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRequest'], meta: { name: 'UserRequest' } }
    /**
     * Find zero or one UserRequest that matches the filter.
     * @param {UserRequestFindUniqueArgs} args - Arguments to find a UserRequest
     * @example
     * // Get one UserRequest
     * const userRequest = await prisma.userRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRequestFindUniqueArgs>(args: SelectSubset<T, UserRequestFindUniqueArgs<ExtArgs>>): Prisma__UserRequestClient<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRequestFindUniqueOrThrowArgs} args - Arguments to find a UserRequest
     * @example
     * // Get one UserRequest
     * const userRequest = await prisma.userRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRequestClient<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRequestFindFirstArgs} args - Arguments to find a UserRequest
     * @example
     * // Get one UserRequest
     * const userRequest = await prisma.userRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRequestFindFirstArgs>(args?: SelectSubset<T, UserRequestFindFirstArgs<ExtArgs>>): Prisma__UserRequestClient<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRequestFindFirstOrThrowArgs} args - Arguments to find a UserRequest
     * @example
     * // Get one UserRequest
     * const userRequest = await prisma.userRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRequestClient<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRequests
     * const userRequests = await prisma.userRequest.findMany()
     * 
     * // Get first 10 UserRequests
     * const userRequests = await prisma.userRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRequestWithIdOnly = await prisma.userRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRequestFindManyArgs>(args?: SelectSubset<T, UserRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRequest.
     * @param {UserRequestCreateArgs} args - Arguments to create a UserRequest.
     * @example
     * // Create one UserRequest
     * const UserRequest = await prisma.userRequest.create({
     *   data: {
     *     // ... data to create a UserRequest
     *   }
     * })
     * 
     */
    create<T extends UserRequestCreateArgs>(args: SelectSubset<T, UserRequestCreateArgs<ExtArgs>>): Prisma__UserRequestClient<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRequests.
     * @param {UserRequestCreateManyArgs} args - Arguments to create many UserRequests.
     * @example
     * // Create many UserRequests
     * const userRequest = await prisma.userRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRequestCreateManyArgs>(args?: SelectSubset<T, UserRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRequest.
     * @param {UserRequestDeleteArgs} args - Arguments to delete one UserRequest.
     * @example
     * // Delete one UserRequest
     * const UserRequest = await prisma.userRequest.delete({
     *   where: {
     *     // ... filter to delete one UserRequest
     *   }
     * })
     * 
     */
    delete<T extends UserRequestDeleteArgs>(args: SelectSubset<T, UserRequestDeleteArgs<ExtArgs>>): Prisma__UserRequestClient<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRequest.
     * @param {UserRequestUpdateArgs} args - Arguments to update one UserRequest.
     * @example
     * // Update one UserRequest
     * const userRequest = await prisma.userRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRequestUpdateArgs>(args: SelectSubset<T, UserRequestUpdateArgs<ExtArgs>>): Prisma__UserRequestClient<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRequests.
     * @param {UserRequestDeleteManyArgs} args - Arguments to filter UserRequests to delete.
     * @example
     * // Delete a few UserRequests
     * const { count } = await prisma.userRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRequestDeleteManyArgs>(args?: SelectSubset<T, UserRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRequests
     * const userRequest = await prisma.userRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRequestUpdateManyArgs>(args: SelectSubset<T, UserRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRequest.
     * @param {UserRequestUpsertArgs} args - Arguments to update or create a UserRequest.
     * @example
     * // Update or create a UserRequest
     * const userRequest = await prisma.userRequest.upsert({
     *   create: {
     *     // ... data to create a UserRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRequest we want to update
     *   }
     * })
     */
    upsert<T extends UserRequestUpsertArgs>(args: SelectSubset<T, UserRequestUpsertArgs<ExtArgs>>): Prisma__UserRequestClient<$Result.GetResult<Prisma.$UserRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRequests that matches the filter.
     * @param {UserRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userRequest = await prisma.userRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserRequest.
     * @param {UserRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userRequest = await prisma.userRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRequestCountArgs} args - Arguments to filter UserRequests to count.
     * @example
     * // Count the number of UserRequests
     * const count = await prisma.userRequest.count({
     *   where: {
     *     // ... the filter for the UserRequests we want to count
     *   }
     * })
    **/
    count<T extends UserRequestCountArgs>(
      args?: Subset<T, UserRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRequestAggregateArgs>(args: Subset<T, UserRequestAggregateArgs>): Prisma.PrismaPromise<GetUserRequestAggregateType<T>>

    /**
     * Group by UserRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRequestGroupByArgs['orderBy'] }
        : { orderBy?: UserRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRequest model
   */
  readonly fields: UserRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRequest model
   */
  interface UserRequestFieldRefs {
    readonly id: FieldRef<"UserRequest", 'String'>
    readonly userId: FieldRef<"UserRequest", 'String'>
    readonly requestedRole: FieldRef<"UserRequest", 'UserRole'>
    readonly updatedAt: FieldRef<"UserRequest", 'DateTime'>
    readonly createdAt: FieldRef<"UserRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRequest findUnique
   */
  export type UserRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * Filter, which UserRequest to fetch.
     */
    where: UserRequestWhereUniqueInput
  }

  /**
   * UserRequest findUniqueOrThrow
   */
  export type UserRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * Filter, which UserRequest to fetch.
     */
    where: UserRequestWhereUniqueInput
  }

  /**
   * UserRequest findFirst
   */
  export type UserRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * Filter, which UserRequest to fetch.
     */
    where?: UserRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRequests to fetch.
     */
    orderBy?: UserRequestOrderByWithRelationInput | UserRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRequests.
     */
    cursor?: UserRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRequests.
     */
    distinct?: UserRequestScalarFieldEnum | UserRequestScalarFieldEnum[]
  }

  /**
   * UserRequest findFirstOrThrow
   */
  export type UserRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * Filter, which UserRequest to fetch.
     */
    where?: UserRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRequests to fetch.
     */
    orderBy?: UserRequestOrderByWithRelationInput | UserRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRequests.
     */
    cursor?: UserRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRequests.
     */
    distinct?: UserRequestScalarFieldEnum | UserRequestScalarFieldEnum[]
  }

  /**
   * UserRequest findMany
   */
  export type UserRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * Filter, which UserRequests to fetch.
     */
    where?: UserRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRequests to fetch.
     */
    orderBy?: UserRequestOrderByWithRelationInput | UserRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRequests.
     */
    cursor?: UserRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRequests.
     */
    skip?: number
    distinct?: UserRequestScalarFieldEnum | UserRequestScalarFieldEnum[]
  }

  /**
   * UserRequest create
   */
  export type UserRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRequest.
     */
    data: XOR<UserRequestCreateInput, UserRequestUncheckedCreateInput>
  }

  /**
   * UserRequest createMany
   */
  export type UserRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRequests.
     */
    data: UserRequestCreateManyInput | UserRequestCreateManyInput[]
  }

  /**
   * UserRequest update
   */
  export type UserRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRequest.
     */
    data: XOR<UserRequestUpdateInput, UserRequestUncheckedUpdateInput>
    /**
     * Choose, which UserRequest to update.
     */
    where: UserRequestWhereUniqueInput
  }

  /**
   * UserRequest updateMany
   */
  export type UserRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRequests.
     */
    data: XOR<UserRequestUpdateManyMutationInput, UserRequestUncheckedUpdateManyInput>
    /**
     * Filter which UserRequests to update
     */
    where?: UserRequestWhereInput
    /**
     * Limit how many UserRequests to update.
     */
    limit?: number
  }

  /**
   * UserRequest upsert
   */
  export type UserRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRequest to update in case it exists.
     */
    where: UserRequestWhereUniqueInput
    /**
     * In case the UserRequest found by the `where` argument doesn't exist, create a new UserRequest with this data.
     */
    create: XOR<UserRequestCreateInput, UserRequestUncheckedCreateInput>
    /**
     * In case the UserRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRequestUpdateInput, UserRequestUncheckedUpdateInput>
  }

  /**
   * UserRequest delete
   */
  export type UserRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
    /**
     * Filter which UserRequest to delete.
     */
    where: UserRequestWhereUniqueInput
  }

  /**
   * UserRequest deleteMany
   */
  export type UserRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRequests to delete
     */
    where?: UserRequestWhereInput
    /**
     * Limit how many UserRequests to delete.
     */
    limit?: number
  }

  /**
   * UserRequest findRaw
   */
  export type UserRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserRequest aggregateRaw
   */
  export type UserRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserRequest without action
   */
  export type UserRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRequest
     */
    select?: UserRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRequest
     */
    omit?: UserRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRequestInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.SubscriptionType | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    renewalDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.SubscriptionType | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    renewalDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    status: number
    startDate: number
    endDate: number
    renewalDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    renewalDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    renewalDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    status?: true
    startDate?: true
    endDate?: true
    renewalDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.SubscriptionType
    status: $Enums.SubscriptionStatus
    startDate: Date
    endDate: Date | null
    renewalDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPlanCountAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    renewalDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>



  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    renewalDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "status" | "startDate" | "endDate" | "renewalDate" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.SubscriptionType
      status: $Enums.SubscriptionStatus
      startDate: Date
      endDate: Date | null
      renewalDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * @param {SubscriptionPlanFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subscriptionPlan = await prisma.subscriptionPlan.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubscriptionPlanFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SubscriptionPlan.
     * @param {SubscriptionPlanAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subscriptionPlan = await prisma.subscriptionPlan.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubscriptionPlanAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly userId: FieldRef<"SubscriptionPlan", 'String'>
    readonly type: FieldRef<"SubscriptionPlan", 'SubscriptionType'>
    readonly status: FieldRef<"SubscriptionPlan", 'SubscriptionStatus'>
    readonly startDate: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly endDate: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly renewalDate: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly createdAt: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan findRaw
   */
  export type SubscriptionPlanFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SubscriptionPlan aggregateRaw
   */
  export type SubscriptionPlanAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    province: number | null
    lon: number | null
    lat: number | null
    roomNumber: number | null
    numberOfRooms: number | null
    beds: number | null
    toilet: number | null
    roomCapacity: number | null
    dueAmount: number | null
  }

  export type RoomSumAggregateOutputType = {
    province: number | null
    lon: number | null
    lat: number | null
    roomNumber: number | null
    numberOfRooms: number | null
    beds: number | null
    toilet: number | null
    roomCapacity: number | null
    dueAmount: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    roomStatus: $Enums.RoomStatus | null
    province: number | null
    location: string | null
    lon: number | null
    lat: number | null
    roomNumber: number | null
    title: string | null
    description: string | null
    numberOfRooms: number | null
    beds: number | null
    toilet: number | null
    roomCapacity: number | null
    roomType: $Enums.RoomType | null
    roomFor: $Enums.RoomFor | null
    dueAmount: number | null
    clientInitationData: Date | null
    startedPriceFromDate: Date | null
    lastPayedDate: Date | null
    createdAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    roomStatus: $Enums.RoomStatus | null
    province: number | null
    location: string | null
    lon: number | null
    lat: number | null
    roomNumber: number | null
    title: string | null
    description: string | null
    numberOfRooms: number | null
    beds: number | null
    toilet: number | null
    roomCapacity: number | null
    roomType: $Enums.RoomType | null
    roomFor: $Enums.RoomFor | null
    dueAmount: number | null
    clientInitationData: Date | null
    startedPriceFromDate: Date | null
    lastPayedDate: Date | null
    createdAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    ownerId: number
    roomStatus: number
    province: number
    location: number
    lon: number
    lat: number
    roomNumber: number
    title: number
    description: number
    roomImages: number
    numberOfRooms: number
    beds: number
    toilet: number
    clients: number
    roomCapacity: number
    roomType: number
    roomFor: number
    dueAmount: number
    clientInitationData: number
    startedPriceFromDate: number
    lastPayedDate: number
    createdAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    province?: true
    lon?: true
    lat?: true
    roomNumber?: true
    numberOfRooms?: true
    beds?: true
    toilet?: true
    roomCapacity?: true
    dueAmount?: true
  }

  export type RoomSumAggregateInputType = {
    province?: true
    lon?: true
    lat?: true
    roomNumber?: true
    numberOfRooms?: true
    beds?: true
    toilet?: true
    roomCapacity?: true
    dueAmount?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    ownerId?: true
    roomStatus?: true
    province?: true
    location?: true
    lon?: true
    lat?: true
    roomNumber?: true
    title?: true
    description?: true
    numberOfRooms?: true
    beds?: true
    toilet?: true
    roomCapacity?: true
    roomType?: true
    roomFor?: true
    dueAmount?: true
    clientInitationData?: true
    startedPriceFromDate?: true
    lastPayedDate?: true
    createdAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    ownerId?: true
    roomStatus?: true
    province?: true
    location?: true
    lon?: true
    lat?: true
    roomNumber?: true
    title?: true
    description?: true
    numberOfRooms?: true
    beds?: true
    toilet?: true
    roomCapacity?: true
    roomType?: true
    roomFor?: true
    dueAmount?: true
    clientInitationData?: true
    startedPriceFromDate?: true
    lastPayedDate?: true
    createdAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    ownerId?: true
    roomStatus?: true
    province?: true
    location?: true
    lon?: true
    lat?: true
    roomNumber?: true
    title?: true
    description?: true
    roomImages?: true
    numberOfRooms?: true
    beds?: true
    toilet?: true
    clients?: true
    roomCapacity?: true
    roomType?: true
    roomFor?: true
    dueAmount?: true
    clientInitationData?: true
    startedPriceFromDate?: true
    lastPayedDate?: true
    createdAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    ownerId: string
    roomStatus: $Enums.RoomStatus
    province: number
    location: string
    lon: number | null
    lat: number | null
    roomNumber: number
    title: string
    description: string
    roomImages: string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients: string[]
    roomCapacity: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount: number
    clientInitationData: Date | null
    startedPriceFromDate: Date | null
    lastPayedDate: Date | null
    createdAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    roomStatus?: boolean
    province?: boolean
    location?: boolean
    lon?: boolean
    lat?: boolean
    roomNumber?: boolean
    title?: boolean
    description?: boolean
    roomImages?: boolean
    numberOfRooms?: boolean
    beds?: boolean
    toilet?: boolean
    clients?: boolean
    roomCapacity?: boolean
    roomType?: boolean
    roomFor?: boolean
    dueAmount?: boolean
    clientInitationData?: boolean
    startedPriceFromDate?: boolean
    lastPayedDate?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    roomBilling?: boolean | Room$roomBillingArgs<ExtArgs>
    roomPayment?: boolean | Room$roomPaymentArgs<ExtArgs>
    roomPaymentRecord?: boolean | Room$roomPaymentRecordArgs<ExtArgs>
    posts?: boolean | Room$postsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    ownerId?: boolean
    roomStatus?: boolean
    province?: boolean
    location?: boolean
    lon?: boolean
    lat?: boolean
    roomNumber?: boolean
    title?: boolean
    description?: boolean
    roomImages?: boolean
    numberOfRooms?: boolean
    beds?: boolean
    toilet?: boolean
    clients?: boolean
    roomCapacity?: boolean
    roomType?: boolean
    roomFor?: boolean
    dueAmount?: boolean
    clientInitationData?: boolean
    startedPriceFromDate?: boolean
    lastPayedDate?: boolean
    createdAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "roomStatus" | "province" | "location" | "lon" | "lat" | "roomNumber" | "title" | "description" | "roomImages" | "numberOfRooms" | "beds" | "toilet" | "clients" | "roomCapacity" | "roomType" | "roomFor" | "dueAmount" | "clientInitationData" | "startedPriceFromDate" | "lastPayedDate" | "createdAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    roomBilling?: boolean | Room$roomBillingArgs<ExtArgs>
    roomPayment?: boolean | Room$roomPaymentArgs<ExtArgs>
    roomPaymentRecord?: boolean | Room$roomPaymentRecordArgs<ExtArgs>
    posts?: boolean | Room$postsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      roomBilling: Prisma.$RoomBillingPayload<ExtArgs> | null
      roomPayment: Prisma.$PaymentHistoryPayload<ExtArgs>[]
      roomPaymentRecord: Prisma.$RoomPaymentRecordPayload<ExtArgs>[]
      posts: Prisma.$PostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      roomStatus: $Enums.RoomStatus
      province: number
      location: string
      lon: number | null
      lat: number | null
      roomNumber: number
      title: string
      description: string
      roomImages: string[]
      numberOfRooms: number
      beds: number
      toilet: number
      clients: string[]
      roomCapacity: number
      roomType: $Enums.RoomType
      roomFor: $Enums.RoomFor
      dueAmount: number
      clientInitationData: Date | null
      startedPriceFromDate: Date | null
      lastPayedDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * @param {RoomFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const room = await prisma.room.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoomFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Room.
     * @param {RoomAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const room = await prisma.room.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoomAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roomBilling<T extends Room$roomBillingArgs<ExtArgs> = {}>(args?: Subset<T, Room$roomBillingArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roomPayment<T extends Room$roomPaymentArgs<ExtArgs> = {}>(args?: Subset<T, Room$roomPaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomPaymentRecord<T extends Room$roomPaymentRecordArgs<ExtArgs> = {}>(args?: Subset<T, Room$roomPaymentRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Room$postsArgs<ExtArgs> = {}>(args?: Subset<T, Room$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly ownerId: FieldRef<"Room", 'String'>
    readonly roomStatus: FieldRef<"Room", 'RoomStatus'>
    readonly province: FieldRef<"Room", 'Int'>
    readonly location: FieldRef<"Room", 'String'>
    readonly lon: FieldRef<"Room", 'Float'>
    readonly lat: FieldRef<"Room", 'Float'>
    readonly roomNumber: FieldRef<"Room", 'Int'>
    readonly title: FieldRef<"Room", 'String'>
    readonly description: FieldRef<"Room", 'String'>
    readonly roomImages: FieldRef<"Room", 'String[]'>
    readonly numberOfRooms: FieldRef<"Room", 'Int'>
    readonly beds: FieldRef<"Room", 'Int'>
    readonly toilet: FieldRef<"Room", 'Int'>
    readonly clients: FieldRef<"Room", 'String[]'>
    readonly roomCapacity: FieldRef<"Room", 'Int'>
    readonly roomType: FieldRef<"Room", 'RoomType'>
    readonly roomFor: FieldRef<"Room", 'RoomFor'>
    readonly dueAmount: FieldRef<"Room", 'Float'>
    readonly clientInitationData: FieldRef<"Room", 'DateTime'>
    readonly startedPriceFromDate: FieldRef<"Room", 'DateTime'>
    readonly lastPayedDate: FieldRef<"Room", 'DateTime'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room findRaw
   */
  export type RoomFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Room aggregateRaw
   */
  export type RoomAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Room.roomBilling
   */
  export type Room$roomBillingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    where?: RoomBillingWhereInput
  }

  /**
   * Room.roomPayment
   */
  export type Room$roomPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * Room.roomPaymentRecord
   */
  export type Room$roomPaymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    where?: RoomPaymentRecordWhereInput
    orderBy?: RoomPaymentRecordOrderByWithRelationInput | RoomPaymentRecordOrderByWithRelationInput[]
    cursor?: RoomPaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomPaymentRecordScalarFieldEnum | RoomPaymentRecordScalarFieldEnum[]
  }

  /**
   * Room.posts
   */
  export type Room$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomBilling
   */

  export type AggregateRoomBilling = {
    _count: RoomBillingCountAggregateOutputType | null
    _avg: RoomBillingAvgAggregateOutputType | null
    _sum: RoomBillingSumAggregateOutputType | null
    _min: RoomBillingMinAggregateOutputType | null
    _max: RoomBillingMaxAggregateOutputType | null
  }

  export type RoomBillingAvgAggregateOutputType = {
    water: number | null
    electricity: number | null
    internet: number | null
    roomCost: number | null
  }

  export type RoomBillingSumAggregateOutputType = {
    water: number | null
    electricity: number | null
    internet: number | null
    roomCost: number | null
  }

  export type RoomBillingMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    roomId: string | null
    water: number | null
    electricity: number | null
    internet: number | null
    roomCost: number | null
    createdAt: Date | null
  }

  export type RoomBillingMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    roomId: string | null
    water: number | null
    electricity: number | null
    internet: number | null
    roomCost: number | null
    createdAt: Date | null
  }

  export type RoomBillingCountAggregateOutputType = {
    id: number
    ownerId: number
    roomId: number
    water: number
    electricity: number
    internet: number
    roomCost: number
    createdAt: number
    _all: number
  }


  export type RoomBillingAvgAggregateInputType = {
    water?: true
    electricity?: true
    internet?: true
    roomCost?: true
  }

  export type RoomBillingSumAggregateInputType = {
    water?: true
    electricity?: true
    internet?: true
    roomCost?: true
  }

  export type RoomBillingMinAggregateInputType = {
    id?: true
    ownerId?: true
    roomId?: true
    water?: true
    electricity?: true
    internet?: true
    roomCost?: true
    createdAt?: true
  }

  export type RoomBillingMaxAggregateInputType = {
    id?: true
    ownerId?: true
    roomId?: true
    water?: true
    electricity?: true
    internet?: true
    roomCost?: true
    createdAt?: true
  }

  export type RoomBillingCountAggregateInputType = {
    id?: true
    ownerId?: true
    roomId?: true
    water?: true
    electricity?: true
    internet?: true
    roomCost?: true
    createdAt?: true
    _all?: true
  }

  export type RoomBillingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomBilling to aggregate.
     */
    where?: RoomBillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomBillings to fetch.
     */
    orderBy?: RoomBillingOrderByWithRelationInput | RoomBillingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomBillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomBillings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomBillings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomBillings
    **/
    _count?: true | RoomBillingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomBillingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomBillingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomBillingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomBillingMaxAggregateInputType
  }

  export type GetRoomBillingAggregateType<T extends RoomBillingAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomBilling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomBilling[P]>
      : GetScalarType<T[P], AggregateRoomBilling[P]>
  }




  export type RoomBillingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomBillingWhereInput
    orderBy?: RoomBillingOrderByWithAggregationInput | RoomBillingOrderByWithAggregationInput[]
    by: RoomBillingScalarFieldEnum[] | RoomBillingScalarFieldEnum
    having?: RoomBillingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomBillingCountAggregateInputType | true
    _avg?: RoomBillingAvgAggregateInputType
    _sum?: RoomBillingSumAggregateInputType
    _min?: RoomBillingMinAggregateInputType
    _max?: RoomBillingMaxAggregateInputType
  }

  export type RoomBillingGroupByOutputType = {
    id: string
    ownerId: string
    roomId: string
    water: number
    electricity: number
    internet: number
    roomCost: number
    createdAt: Date
    _count: RoomBillingCountAggregateOutputType | null
    _avg: RoomBillingAvgAggregateOutputType | null
    _sum: RoomBillingSumAggregateOutputType | null
    _min: RoomBillingMinAggregateOutputType | null
    _max: RoomBillingMaxAggregateOutputType | null
  }

  type GetRoomBillingGroupByPayload<T extends RoomBillingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomBillingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomBillingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomBillingGroupByOutputType[P]>
            : GetScalarType<T[P], RoomBillingGroupByOutputType[P]>
        }
      >
    >


  export type RoomBillingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    roomId?: boolean
    water?: boolean
    electricity?: boolean
    internet?: boolean
    roomCost?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomBilling"]>



  export type RoomBillingSelectScalar = {
    id?: boolean
    ownerId?: boolean
    roomId?: boolean
    water?: boolean
    electricity?: boolean
    internet?: boolean
    roomCost?: boolean
    createdAt?: boolean
  }

  export type RoomBillingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "roomId" | "water" | "electricity" | "internet" | "roomCost" | "createdAt", ExtArgs["result"]["roomBilling"]>
  export type RoomBillingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomBillingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomBilling"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      roomId: string
      water: number
      electricity: number
      internet: number
      roomCost: number
      createdAt: Date
    }, ExtArgs["result"]["roomBilling"]>
    composites: {}
  }

  type RoomBillingGetPayload<S extends boolean | null | undefined | RoomBillingDefaultArgs> = $Result.GetResult<Prisma.$RoomBillingPayload, S>

  type RoomBillingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomBillingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomBillingCountAggregateInputType | true
    }

  export interface RoomBillingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomBilling'], meta: { name: 'RoomBilling' } }
    /**
     * Find zero or one RoomBilling that matches the filter.
     * @param {RoomBillingFindUniqueArgs} args - Arguments to find a RoomBilling
     * @example
     * // Get one RoomBilling
     * const roomBilling = await prisma.roomBilling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomBillingFindUniqueArgs>(args: SelectSubset<T, RoomBillingFindUniqueArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomBilling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomBillingFindUniqueOrThrowArgs} args - Arguments to find a RoomBilling
     * @example
     * // Get one RoomBilling
     * const roomBilling = await prisma.roomBilling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomBillingFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomBillingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomBilling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBillingFindFirstArgs} args - Arguments to find a RoomBilling
     * @example
     * // Get one RoomBilling
     * const roomBilling = await prisma.roomBilling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomBillingFindFirstArgs>(args?: SelectSubset<T, RoomBillingFindFirstArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomBilling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBillingFindFirstOrThrowArgs} args - Arguments to find a RoomBilling
     * @example
     * // Get one RoomBilling
     * const roomBilling = await prisma.roomBilling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomBillingFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomBillingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomBillings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBillingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomBillings
     * const roomBillings = await prisma.roomBilling.findMany()
     * 
     * // Get first 10 RoomBillings
     * const roomBillings = await prisma.roomBilling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomBillingWithIdOnly = await prisma.roomBilling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomBillingFindManyArgs>(args?: SelectSubset<T, RoomBillingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomBilling.
     * @param {RoomBillingCreateArgs} args - Arguments to create a RoomBilling.
     * @example
     * // Create one RoomBilling
     * const RoomBilling = await prisma.roomBilling.create({
     *   data: {
     *     // ... data to create a RoomBilling
     *   }
     * })
     * 
     */
    create<T extends RoomBillingCreateArgs>(args: SelectSubset<T, RoomBillingCreateArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomBillings.
     * @param {RoomBillingCreateManyArgs} args - Arguments to create many RoomBillings.
     * @example
     * // Create many RoomBillings
     * const roomBilling = await prisma.roomBilling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomBillingCreateManyArgs>(args?: SelectSubset<T, RoomBillingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomBilling.
     * @param {RoomBillingDeleteArgs} args - Arguments to delete one RoomBilling.
     * @example
     * // Delete one RoomBilling
     * const RoomBilling = await prisma.roomBilling.delete({
     *   where: {
     *     // ... filter to delete one RoomBilling
     *   }
     * })
     * 
     */
    delete<T extends RoomBillingDeleteArgs>(args: SelectSubset<T, RoomBillingDeleteArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomBilling.
     * @param {RoomBillingUpdateArgs} args - Arguments to update one RoomBilling.
     * @example
     * // Update one RoomBilling
     * const roomBilling = await prisma.roomBilling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomBillingUpdateArgs>(args: SelectSubset<T, RoomBillingUpdateArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomBillings.
     * @param {RoomBillingDeleteManyArgs} args - Arguments to filter RoomBillings to delete.
     * @example
     * // Delete a few RoomBillings
     * const { count } = await prisma.roomBilling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomBillingDeleteManyArgs>(args?: SelectSubset<T, RoomBillingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomBillings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBillingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomBillings
     * const roomBilling = await prisma.roomBilling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomBillingUpdateManyArgs>(args: SelectSubset<T, RoomBillingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomBilling.
     * @param {RoomBillingUpsertArgs} args - Arguments to update or create a RoomBilling.
     * @example
     * // Update or create a RoomBilling
     * const roomBilling = await prisma.roomBilling.upsert({
     *   create: {
     *     // ... data to create a RoomBilling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomBilling we want to update
     *   }
     * })
     */
    upsert<T extends RoomBillingUpsertArgs>(args: SelectSubset<T, RoomBillingUpsertArgs<ExtArgs>>): Prisma__RoomBillingClient<$Result.GetResult<Prisma.$RoomBillingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomBillings that matches the filter.
     * @param {RoomBillingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const roomBilling = await prisma.roomBilling.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoomBillingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RoomBilling.
     * @param {RoomBillingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const roomBilling = await prisma.roomBilling.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoomBillingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RoomBillings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBillingCountArgs} args - Arguments to filter RoomBillings to count.
     * @example
     * // Count the number of RoomBillings
     * const count = await prisma.roomBilling.count({
     *   where: {
     *     // ... the filter for the RoomBillings we want to count
     *   }
     * })
    **/
    count<T extends RoomBillingCountArgs>(
      args?: Subset<T, RoomBillingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomBillingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomBilling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBillingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomBillingAggregateArgs>(args: Subset<T, RoomBillingAggregateArgs>): Prisma.PrismaPromise<GetRoomBillingAggregateType<T>>

    /**
     * Group by RoomBilling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomBillingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomBillingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomBillingGroupByArgs['orderBy'] }
        : { orderBy?: RoomBillingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomBillingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomBillingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomBilling model
   */
  readonly fields: RoomBillingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomBilling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomBillingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomBilling model
   */
  interface RoomBillingFieldRefs {
    readonly id: FieldRef<"RoomBilling", 'String'>
    readonly ownerId: FieldRef<"RoomBilling", 'String'>
    readonly roomId: FieldRef<"RoomBilling", 'String'>
    readonly water: FieldRef<"RoomBilling", 'Float'>
    readonly electricity: FieldRef<"RoomBilling", 'Float'>
    readonly internet: FieldRef<"RoomBilling", 'Float'>
    readonly roomCost: FieldRef<"RoomBilling", 'Float'>
    readonly createdAt: FieldRef<"RoomBilling", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomBilling findUnique
   */
  export type RoomBillingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * Filter, which RoomBilling to fetch.
     */
    where: RoomBillingWhereUniqueInput
  }

  /**
   * RoomBilling findUniqueOrThrow
   */
  export type RoomBillingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * Filter, which RoomBilling to fetch.
     */
    where: RoomBillingWhereUniqueInput
  }

  /**
   * RoomBilling findFirst
   */
  export type RoomBillingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * Filter, which RoomBilling to fetch.
     */
    where?: RoomBillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomBillings to fetch.
     */
    orderBy?: RoomBillingOrderByWithRelationInput | RoomBillingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomBillings.
     */
    cursor?: RoomBillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomBillings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomBillings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomBillings.
     */
    distinct?: RoomBillingScalarFieldEnum | RoomBillingScalarFieldEnum[]
  }

  /**
   * RoomBilling findFirstOrThrow
   */
  export type RoomBillingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * Filter, which RoomBilling to fetch.
     */
    where?: RoomBillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomBillings to fetch.
     */
    orderBy?: RoomBillingOrderByWithRelationInput | RoomBillingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomBillings.
     */
    cursor?: RoomBillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomBillings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomBillings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomBillings.
     */
    distinct?: RoomBillingScalarFieldEnum | RoomBillingScalarFieldEnum[]
  }

  /**
   * RoomBilling findMany
   */
  export type RoomBillingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * Filter, which RoomBillings to fetch.
     */
    where?: RoomBillingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomBillings to fetch.
     */
    orderBy?: RoomBillingOrderByWithRelationInput | RoomBillingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomBillings.
     */
    cursor?: RoomBillingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomBillings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomBillings.
     */
    skip?: number
    distinct?: RoomBillingScalarFieldEnum | RoomBillingScalarFieldEnum[]
  }

  /**
   * RoomBilling create
   */
  export type RoomBillingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomBilling.
     */
    data: XOR<RoomBillingCreateInput, RoomBillingUncheckedCreateInput>
  }

  /**
   * RoomBilling createMany
   */
  export type RoomBillingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomBillings.
     */
    data: RoomBillingCreateManyInput | RoomBillingCreateManyInput[]
  }

  /**
   * RoomBilling update
   */
  export type RoomBillingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomBilling.
     */
    data: XOR<RoomBillingUpdateInput, RoomBillingUncheckedUpdateInput>
    /**
     * Choose, which RoomBilling to update.
     */
    where: RoomBillingWhereUniqueInput
  }

  /**
   * RoomBilling updateMany
   */
  export type RoomBillingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomBillings.
     */
    data: XOR<RoomBillingUpdateManyMutationInput, RoomBillingUncheckedUpdateManyInput>
    /**
     * Filter which RoomBillings to update
     */
    where?: RoomBillingWhereInput
    /**
     * Limit how many RoomBillings to update.
     */
    limit?: number
  }

  /**
   * RoomBilling upsert
   */
  export type RoomBillingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomBilling to update in case it exists.
     */
    where: RoomBillingWhereUniqueInput
    /**
     * In case the RoomBilling found by the `where` argument doesn't exist, create a new RoomBilling with this data.
     */
    create: XOR<RoomBillingCreateInput, RoomBillingUncheckedCreateInput>
    /**
     * In case the RoomBilling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomBillingUpdateInput, RoomBillingUncheckedUpdateInput>
  }

  /**
   * RoomBilling delete
   */
  export type RoomBillingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
    /**
     * Filter which RoomBilling to delete.
     */
    where: RoomBillingWhereUniqueInput
  }

  /**
   * RoomBilling deleteMany
   */
  export type RoomBillingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomBillings to delete
     */
    where?: RoomBillingWhereInput
    /**
     * Limit how many RoomBillings to delete.
     */
    limit?: number
  }

  /**
   * RoomBilling findRaw
   */
  export type RoomBillingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoomBilling aggregateRaw
   */
  export type RoomBillingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoomBilling without action
   */
  export type RoomBillingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomBilling
     */
    select?: RoomBillingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomBilling
     */
    omit?: RoomBillingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomBillingInclude<ExtArgs> | null
  }


  /**
   * Model RoomPaymentRecord
   */

  export type AggregateRoomPaymentRecord = {
    _count: RoomPaymentRecordCountAggregateOutputType | null
    _avg: RoomPaymentRecordAvgAggregateOutputType | null
    _sum: RoomPaymentRecordSumAggregateOutputType | null
    _min: RoomPaymentRecordMinAggregateOutputType | null
    _max: RoomPaymentRecordMaxAggregateOutputType | null
  }

  export type RoomPaymentRecordAvgAggregateOutputType = {
    amountTotal: number | null
    payedAmount: number | null
    dueAmount: number | null
  }

  export type RoomPaymentRecordSumAggregateOutputType = {
    amountTotal: number | null
    payedAmount: number | null
    dueAmount: number | null
  }

  export type RoomPaymentRecordMinAggregateOutputType = {
    id: string | null
    description: string | null
    ownerId: string | null
    roomId: string | null
    payedBy: string | null
    amountTotal: number | null
    payedAmount: number | null
    dueAmount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    dueMoneyReason: string | null
    createdAt: Date | null
  }

  export type RoomPaymentRecordMaxAggregateOutputType = {
    id: string | null
    description: string | null
    ownerId: string | null
    roomId: string | null
    payedBy: string | null
    amountTotal: number | null
    payedAmount: number | null
    dueAmount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    dueMoneyReason: string | null
    createdAt: Date | null
  }

  export type RoomPaymentRecordCountAggregateOutputType = {
    id: number
    description: number
    ownerId: number
    roomId: number
    payedBy: number
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus: number
    dueMoneyReason: number
    createdAt: number
    _all: number
  }


  export type RoomPaymentRecordAvgAggregateInputType = {
    amountTotal?: true
    payedAmount?: true
    dueAmount?: true
  }

  export type RoomPaymentRecordSumAggregateInputType = {
    amountTotal?: true
    payedAmount?: true
    dueAmount?: true
  }

  export type RoomPaymentRecordMinAggregateInputType = {
    id?: true
    description?: true
    ownerId?: true
    roomId?: true
    payedBy?: true
    amountTotal?: true
    payedAmount?: true
    dueAmount?: true
    paymentStatus?: true
    dueMoneyReason?: true
    createdAt?: true
  }

  export type RoomPaymentRecordMaxAggregateInputType = {
    id?: true
    description?: true
    ownerId?: true
    roomId?: true
    payedBy?: true
    amountTotal?: true
    payedAmount?: true
    dueAmount?: true
    paymentStatus?: true
    dueMoneyReason?: true
    createdAt?: true
  }

  export type RoomPaymentRecordCountAggregateInputType = {
    id?: true
    description?: true
    ownerId?: true
    roomId?: true
    payedBy?: true
    amountTotal?: true
    payedAmount?: true
    dueAmount?: true
    paymentStatus?: true
    dueMoneyReason?: true
    createdAt?: true
    _all?: true
  }

  export type RoomPaymentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPaymentRecord to aggregate.
     */
    where?: RoomPaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPaymentRecords to fetch.
     */
    orderBy?: RoomPaymentRecordOrderByWithRelationInput | RoomPaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomPaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomPaymentRecords
    **/
    _count?: true | RoomPaymentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomPaymentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomPaymentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomPaymentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomPaymentRecordMaxAggregateInputType
  }

  export type GetRoomPaymentRecordAggregateType<T extends RoomPaymentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomPaymentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomPaymentRecord[P]>
      : GetScalarType<T[P], AggregateRoomPaymentRecord[P]>
  }




  export type RoomPaymentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPaymentRecordWhereInput
    orderBy?: RoomPaymentRecordOrderByWithAggregationInput | RoomPaymentRecordOrderByWithAggregationInput[]
    by: RoomPaymentRecordScalarFieldEnum[] | RoomPaymentRecordScalarFieldEnum
    having?: RoomPaymentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomPaymentRecordCountAggregateInputType | true
    _avg?: RoomPaymentRecordAvgAggregateInputType
    _sum?: RoomPaymentRecordSumAggregateInputType
    _min?: RoomPaymentRecordMinAggregateInputType
    _max?: RoomPaymentRecordMaxAggregateInputType
  }

  export type RoomPaymentRecordGroupByOutputType = {
    id: string
    description: string
    ownerId: string
    roomId: string
    payedBy: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus: $Enums.PaymentStatus
    dueMoneyReason: string | null
    createdAt: Date
    _count: RoomPaymentRecordCountAggregateOutputType | null
    _avg: RoomPaymentRecordAvgAggregateOutputType | null
    _sum: RoomPaymentRecordSumAggregateOutputType | null
    _min: RoomPaymentRecordMinAggregateOutputType | null
    _max: RoomPaymentRecordMaxAggregateOutputType | null
  }

  type GetRoomPaymentRecordGroupByPayload<T extends RoomPaymentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomPaymentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomPaymentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomPaymentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], RoomPaymentRecordGroupByOutputType[P]>
        }
      >
    >


  export type RoomPaymentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    ownerId?: boolean
    roomId?: boolean
    payedBy?: boolean
    amountTotal?: boolean
    payedAmount?: boolean
    dueAmount?: boolean
    paymentStatus?: boolean
    dueMoneyReason?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomPaymentRecord"]>



  export type RoomPaymentRecordSelectScalar = {
    id?: boolean
    description?: boolean
    ownerId?: boolean
    roomId?: boolean
    payedBy?: boolean
    amountTotal?: boolean
    payedAmount?: boolean
    dueAmount?: boolean
    paymentStatus?: boolean
    dueMoneyReason?: boolean
    createdAt?: boolean
  }

  export type RoomPaymentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "ownerId" | "roomId" | "payedBy" | "amountTotal" | "payedAmount" | "dueAmount" | "paymentStatus" | "dueMoneyReason" | "createdAt", ExtArgs["result"]["roomPaymentRecord"]>
  export type RoomPaymentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPaymentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomPaymentRecord"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      client: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      ownerId: string
      roomId: string
      payedBy: string
      amountTotal: number
      payedAmount: number
      dueAmount: number
      paymentStatus: $Enums.PaymentStatus
      dueMoneyReason: string | null
      createdAt: Date
    }, ExtArgs["result"]["roomPaymentRecord"]>
    composites: {}
  }

  type RoomPaymentRecordGetPayload<S extends boolean | null | undefined | RoomPaymentRecordDefaultArgs> = $Result.GetResult<Prisma.$RoomPaymentRecordPayload, S>

  type RoomPaymentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomPaymentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomPaymentRecordCountAggregateInputType | true
    }

  export interface RoomPaymentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomPaymentRecord'], meta: { name: 'RoomPaymentRecord' } }
    /**
     * Find zero or one RoomPaymentRecord that matches the filter.
     * @param {RoomPaymentRecordFindUniqueArgs} args - Arguments to find a RoomPaymentRecord
     * @example
     * // Get one RoomPaymentRecord
     * const roomPaymentRecord = await prisma.roomPaymentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomPaymentRecordFindUniqueArgs>(args: SelectSubset<T, RoomPaymentRecordFindUniqueArgs<ExtArgs>>): Prisma__RoomPaymentRecordClient<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomPaymentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomPaymentRecordFindUniqueOrThrowArgs} args - Arguments to find a RoomPaymentRecord
     * @example
     * // Get one RoomPaymentRecord
     * const roomPaymentRecord = await prisma.roomPaymentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomPaymentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomPaymentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomPaymentRecordClient<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPaymentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPaymentRecordFindFirstArgs} args - Arguments to find a RoomPaymentRecord
     * @example
     * // Get one RoomPaymentRecord
     * const roomPaymentRecord = await prisma.roomPaymentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomPaymentRecordFindFirstArgs>(args?: SelectSubset<T, RoomPaymentRecordFindFirstArgs<ExtArgs>>): Prisma__RoomPaymentRecordClient<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPaymentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPaymentRecordFindFirstOrThrowArgs} args - Arguments to find a RoomPaymentRecord
     * @example
     * // Get one RoomPaymentRecord
     * const roomPaymentRecord = await prisma.roomPaymentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomPaymentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomPaymentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomPaymentRecordClient<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomPaymentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPaymentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomPaymentRecords
     * const roomPaymentRecords = await prisma.roomPaymentRecord.findMany()
     * 
     * // Get first 10 RoomPaymentRecords
     * const roomPaymentRecords = await prisma.roomPaymentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomPaymentRecordWithIdOnly = await prisma.roomPaymentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomPaymentRecordFindManyArgs>(args?: SelectSubset<T, RoomPaymentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomPaymentRecord.
     * @param {RoomPaymentRecordCreateArgs} args - Arguments to create a RoomPaymentRecord.
     * @example
     * // Create one RoomPaymentRecord
     * const RoomPaymentRecord = await prisma.roomPaymentRecord.create({
     *   data: {
     *     // ... data to create a RoomPaymentRecord
     *   }
     * })
     * 
     */
    create<T extends RoomPaymentRecordCreateArgs>(args: SelectSubset<T, RoomPaymentRecordCreateArgs<ExtArgs>>): Prisma__RoomPaymentRecordClient<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomPaymentRecords.
     * @param {RoomPaymentRecordCreateManyArgs} args - Arguments to create many RoomPaymentRecords.
     * @example
     * // Create many RoomPaymentRecords
     * const roomPaymentRecord = await prisma.roomPaymentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomPaymentRecordCreateManyArgs>(args?: SelectSubset<T, RoomPaymentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomPaymentRecord.
     * @param {RoomPaymentRecordDeleteArgs} args - Arguments to delete one RoomPaymentRecord.
     * @example
     * // Delete one RoomPaymentRecord
     * const RoomPaymentRecord = await prisma.roomPaymentRecord.delete({
     *   where: {
     *     // ... filter to delete one RoomPaymentRecord
     *   }
     * })
     * 
     */
    delete<T extends RoomPaymentRecordDeleteArgs>(args: SelectSubset<T, RoomPaymentRecordDeleteArgs<ExtArgs>>): Prisma__RoomPaymentRecordClient<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomPaymentRecord.
     * @param {RoomPaymentRecordUpdateArgs} args - Arguments to update one RoomPaymentRecord.
     * @example
     * // Update one RoomPaymentRecord
     * const roomPaymentRecord = await prisma.roomPaymentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomPaymentRecordUpdateArgs>(args: SelectSubset<T, RoomPaymentRecordUpdateArgs<ExtArgs>>): Prisma__RoomPaymentRecordClient<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomPaymentRecords.
     * @param {RoomPaymentRecordDeleteManyArgs} args - Arguments to filter RoomPaymentRecords to delete.
     * @example
     * // Delete a few RoomPaymentRecords
     * const { count } = await prisma.roomPaymentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomPaymentRecordDeleteManyArgs>(args?: SelectSubset<T, RoomPaymentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomPaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPaymentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomPaymentRecords
     * const roomPaymentRecord = await prisma.roomPaymentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomPaymentRecordUpdateManyArgs>(args: SelectSubset<T, RoomPaymentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomPaymentRecord.
     * @param {RoomPaymentRecordUpsertArgs} args - Arguments to update or create a RoomPaymentRecord.
     * @example
     * // Update or create a RoomPaymentRecord
     * const roomPaymentRecord = await prisma.roomPaymentRecord.upsert({
     *   create: {
     *     // ... data to create a RoomPaymentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomPaymentRecord we want to update
     *   }
     * })
     */
    upsert<T extends RoomPaymentRecordUpsertArgs>(args: SelectSubset<T, RoomPaymentRecordUpsertArgs<ExtArgs>>): Prisma__RoomPaymentRecordClient<$Result.GetResult<Prisma.$RoomPaymentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomPaymentRecords that matches the filter.
     * @param {RoomPaymentRecordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const roomPaymentRecord = await prisma.roomPaymentRecord.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoomPaymentRecordFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RoomPaymentRecord.
     * @param {RoomPaymentRecordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const roomPaymentRecord = await prisma.roomPaymentRecord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoomPaymentRecordAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RoomPaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPaymentRecordCountArgs} args - Arguments to filter RoomPaymentRecords to count.
     * @example
     * // Count the number of RoomPaymentRecords
     * const count = await prisma.roomPaymentRecord.count({
     *   where: {
     *     // ... the filter for the RoomPaymentRecords we want to count
     *   }
     * })
    **/
    count<T extends RoomPaymentRecordCountArgs>(
      args?: Subset<T, RoomPaymentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomPaymentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomPaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPaymentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomPaymentRecordAggregateArgs>(args: Subset<T, RoomPaymentRecordAggregateArgs>): Prisma.PrismaPromise<GetRoomPaymentRecordAggregateType<T>>

    /**
     * Group by RoomPaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPaymentRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomPaymentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomPaymentRecordGroupByArgs['orderBy'] }
        : { orderBy?: RoomPaymentRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomPaymentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomPaymentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomPaymentRecord model
   */
  readonly fields: RoomPaymentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomPaymentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomPaymentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomPaymentRecord model
   */
  interface RoomPaymentRecordFieldRefs {
    readonly id: FieldRef<"RoomPaymentRecord", 'String'>
    readonly description: FieldRef<"RoomPaymentRecord", 'String'>
    readonly ownerId: FieldRef<"RoomPaymentRecord", 'String'>
    readonly roomId: FieldRef<"RoomPaymentRecord", 'String'>
    readonly payedBy: FieldRef<"RoomPaymentRecord", 'String'>
    readonly amountTotal: FieldRef<"RoomPaymentRecord", 'Float'>
    readonly payedAmount: FieldRef<"RoomPaymentRecord", 'Float'>
    readonly dueAmount: FieldRef<"RoomPaymentRecord", 'Float'>
    readonly paymentStatus: FieldRef<"RoomPaymentRecord", 'PaymentStatus'>
    readonly dueMoneyReason: FieldRef<"RoomPaymentRecord", 'String'>
    readonly createdAt: FieldRef<"RoomPaymentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomPaymentRecord findUnique
   */
  export type RoomPaymentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which RoomPaymentRecord to fetch.
     */
    where: RoomPaymentRecordWhereUniqueInput
  }

  /**
   * RoomPaymentRecord findUniqueOrThrow
   */
  export type RoomPaymentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which RoomPaymentRecord to fetch.
     */
    where: RoomPaymentRecordWhereUniqueInput
  }

  /**
   * RoomPaymentRecord findFirst
   */
  export type RoomPaymentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which RoomPaymentRecord to fetch.
     */
    where?: RoomPaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPaymentRecords to fetch.
     */
    orderBy?: RoomPaymentRecordOrderByWithRelationInput | RoomPaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPaymentRecords.
     */
    cursor?: RoomPaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPaymentRecords.
     */
    distinct?: RoomPaymentRecordScalarFieldEnum | RoomPaymentRecordScalarFieldEnum[]
  }

  /**
   * RoomPaymentRecord findFirstOrThrow
   */
  export type RoomPaymentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which RoomPaymentRecord to fetch.
     */
    where?: RoomPaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPaymentRecords to fetch.
     */
    orderBy?: RoomPaymentRecordOrderByWithRelationInput | RoomPaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPaymentRecords.
     */
    cursor?: RoomPaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPaymentRecords.
     */
    distinct?: RoomPaymentRecordScalarFieldEnum | RoomPaymentRecordScalarFieldEnum[]
  }

  /**
   * RoomPaymentRecord findMany
   */
  export type RoomPaymentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which RoomPaymentRecords to fetch.
     */
    where?: RoomPaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPaymentRecords to fetch.
     */
    orderBy?: RoomPaymentRecordOrderByWithRelationInput | RoomPaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomPaymentRecords.
     */
    cursor?: RoomPaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPaymentRecords.
     */
    skip?: number
    distinct?: RoomPaymentRecordScalarFieldEnum | RoomPaymentRecordScalarFieldEnum[]
  }

  /**
   * RoomPaymentRecord create
   */
  export type RoomPaymentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomPaymentRecord.
     */
    data: XOR<RoomPaymentRecordCreateInput, RoomPaymentRecordUncheckedCreateInput>
  }

  /**
   * RoomPaymentRecord createMany
   */
  export type RoomPaymentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomPaymentRecords.
     */
    data: RoomPaymentRecordCreateManyInput | RoomPaymentRecordCreateManyInput[]
  }

  /**
   * RoomPaymentRecord update
   */
  export type RoomPaymentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomPaymentRecord.
     */
    data: XOR<RoomPaymentRecordUpdateInput, RoomPaymentRecordUncheckedUpdateInput>
    /**
     * Choose, which RoomPaymentRecord to update.
     */
    where: RoomPaymentRecordWhereUniqueInput
  }

  /**
   * RoomPaymentRecord updateMany
   */
  export type RoomPaymentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomPaymentRecords.
     */
    data: XOR<RoomPaymentRecordUpdateManyMutationInput, RoomPaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which RoomPaymentRecords to update
     */
    where?: RoomPaymentRecordWhereInput
    /**
     * Limit how many RoomPaymentRecords to update.
     */
    limit?: number
  }

  /**
   * RoomPaymentRecord upsert
   */
  export type RoomPaymentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomPaymentRecord to update in case it exists.
     */
    where: RoomPaymentRecordWhereUniqueInput
    /**
     * In case the RoomPaymentRecord found by the `where` argument doesn't exist, create a new RoomPaymentRecord with this data.
     */
    create: XOR<RoomPaymentRecordCreateInput, RoomPaymentRecordUncheckedCreateInput>
    /**
     * In case the RoomPaymentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomPaymentRecordUpdateInput, RoomPaymentRecordUncheckedUpdateInput>
  }

  /**
   * RoomPaymentRecord delete
   */
  export type RoomPaymentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
    /**
     * Filter which RoomPaymentRecord to delete.
     */
    where: RoomPaymentRecordWhereUniqueInput
  }

  /**
   * RoomPaymentRecord deleteMany
   */
  export type RoomPaymentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPaymentRecords to delete
     */
    where?: RoomPaymentRecordWhereInput
    /**
     * Limit how many RoomPaymentRecords to delete.
     */
    limit?: number
  }

  /**
   * RoomPaymentRecord findRaw
   */
  export type RoomPaymentRecordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoomPaymentRecord aggregateRaw
   */
  export type RoomPaymentRecordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RoomPaymentRecord without action
   */
  export type RoomPaymentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPaymentRecord
     */
    select?: RoomPaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPaymentRecord
     */
    omit?: RoomPaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPaymentRecordInclude<ExtArgs> | null
  }


  /**
   * Model PaymentHistory
   */

  export type AggregatePaymentHistory = {
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  export type PaymentHistoryAvgAggregateOutputType = {
    totalAmount: number | null
    payedamount: number | null
    dueAmount: number | null
  }

  export type PaymentHistorySumAggregateOutputType = {
    totalAmount: number | null
    payedamount: number | null
    dueAmount: number | null
  }

  export type PaymentHistoryMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    payedBy: string | null
    totalAmount: number | null
    roomId: string | null
    payedamount: number | null
    dueAmount: number | null
    startedDate: Date | null
    createdAt: Date | null
  }

  export type PaymentHistoryMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    payedBy: string | null
    totalAmount: number | null
    roomId: string | null
    payedamount: number | null
    dueAmount: number | null
    startedDate: Date | null
    createdAt: Date | null
  }

  export type PaymentHistoryCountAggregateOutputType = {
    id: number
    ownerId: number
    payedBy: number
    totalAmount: number
    roomId: number
    payedamount: number
    dueAmount: number
    startedDate: number
    createdAt: number
    _all: number
  }


  export type PaymentHistoryAvgAggregateInputType = {
    totalAmount?: true
    payedamount?: true
    dueAmount?: true
  }

  export type PaymentHistorySumAggregateInputType = {
    totalAmount?: true
    payedamount?: true
    dueAmount?: true
  }

  export type PaymentHistoryMinAggregateInputType = {
    id?: true
    ownerId?: true
    payedBy?: true
    totalAmount?: true
    roomId?: true
    payedamount?: true
    dueAmount?: true
    startedDate?: true
    createdAt?: true
  }

  export type PaymentHistoryMaxAggregateInputType = {
    id?: true
    ownerId?: true
    payedBy?: true
    totalAmount?: true
    roomId?: true
    payedamount?: true
    dueAmount?: true
    startedDate?: true
    createdAt?: true
  }

  export type PaymentHistoryCountAggregateInputType = {
    id?: true
    ownerId?: true
    payedBy?: true
    totalAmount?: true
    roomId?: true
    payedamount?: true
    dueAmount?: true
    startedDate?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistory to aggregate.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentHistories
    **/
    _count?: true | PaymentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type GetPaymentHistoryAggregateType<T extends PaymentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentHistory[P]>
      : GetScalarType<T[P], AggregatePaymentHistory[P]>
  }




  export type PaymentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithAggregationInput | PaymentHistoryOrderByWithAggregationInput[]
    by: PaymentHistoryScalarFieldEnum[] | PaymentHistoryScalarFieldEnum
    having?: PaymentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentHistoryCountAggregateInputType | true
    _avg?: PaymentHistoryAvgAggregateInputType
    _sum?: PaymentHistorySumAggregateInputType
    _min?: PaymentHistoryMinAggregateInputType
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type PaymentHistoryGroupByOutputType = {
    id: string
    ownerId: string
    payedBy: string
    totalAmount: number
    roomId: string
    payedamount: number
    dueAmount: number
    startedDate: Date
    createdAt: Date
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  type GetPaymentHistoryGroupByPayload<T extends PaymentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PaymentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    payedBy?: boolean
    totalAmount?: boolean
    roomId?: boolean
    payedamount?: boolean
    dueAmount?: boolean
    startedDate?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentHistory"]>



  export type PaymentHistorySelectScalar = {
    id?: boolean
    ownerId?: boolean
    payedBy?: boolean
    totalAmount?: boolean
    roomId?: boolean
    payedamount?: boolean
    dueAmount?: boolean
    startedDate?: boolean
    createdAt?: boolean
  }

  export type PaymentHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "payedBy" | "totalAmount" | "roomId" | "payedamount" | "dueAmount" | "startedDate" | "createdAt", ExtArgs["result"]["paymentHistory"]>
  export type PaymentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $PaymentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentHistory"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      client: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      payedBy: string
      totalAmount: number
      roomId: string
      payedamount: number
      dueAmount: number
      startedDate: Date
      createdAt: Date
    }, ExtArgs["result"]["paymentHistory"]>
    composites: {}
  }

  type PaymentHistoryGetPayload<S extends boolean | null | undefined | PaymentHistoryDefaultArgs> = $Result.GetResult<Prisma.$PaymentHistoryPayload, S>

  type PaymentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentHistoryCountAggregateInputType | true
    }

  export interface PaymentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentHistory'], meta: { name: 'PaymentHistory' } }
    /**
     * Find zero or one PaymentHistory that matches the filter.
     * @param {PaymentHistoryFindUniqueArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentHistoryFindUniqueArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentHistoryFindUniqueOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentHistoryFindFirstArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany()
     * 
     * // Get first 10 PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentHistoryFindManyArgs>(args?: SelectSubset<T, PaymentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentHistory.
     * @param {PaymentHistoryCreateArgs} args - Arguments to create a PaymentHistory.
     * @example
     * // Create one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.create({
     *   data: {
     *     // ... data to create a PaymentHistory
     *   }
     * })
     * 
     */
    create<T extends PaymentHistoryCreateArgs>(args: SelectSubset<T, PaymentHistoryCreateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentHistories.
     * @param {PaymentHistoryCreateManyArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentHistoryCreateManyArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentHistory.
     * @param {PaymentHistoryDeleteArgs} args - Arguments to delete one PaymentHistory.
     * @example
     * // Delete one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.delete({
     *   where: {
     *     // ... filter to delete one PaymentHistory
     *   }
     * })
     * 
     */
    delete<T extends PaymentHistoryDeleteArgs>(args: SelectSubset<T, PaymentHistoryDeleteArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentHistory.
     * @param {PaymentHistoryUpdateArgs} args - Arguments to update one PaymentHistory.
     * @example
     * // Update one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentHistoryUpdateArgs>(args: SelectSubset<T, PaymentHistoryUpdateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentHistories.
     * @param {PaymentHistoryDeleteManyArgs} args - Arguments to filter PaymentHistories to delete.
     * @example
     * // Delete a few PaymentHistories
     * const { count } = await prisma.paymentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentHistoryDeleteManyArgs>(args?: SelectSubset<T, PaymentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentHistoryUpdateManyArgs>(args: SelectSubset<T, PaymentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentHistory.
     * @param {PaymentHistoryUpsertArgs} args - Arguments to update or create a PaymentHistory.
     * @example
     * // Update or create a PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.upsert({
     *   create: {
     *     // ... data to create a PaymentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentHistory we want to update
     *   }
     * })
     */
    upsert<T extends PaymentHistoryUpsertArgs>(args: SelectSubset<T, PaymentHistoryUpsertArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentHistories that matches the filter.
     * @param {PaymentHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const paymentHistory = await prisma.paymentHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PaymentHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PaymentHistory.
     * @param {PaymentHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const paymentHistory = await prisma.paymentHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PaymentHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryCountArgs} args - Arguments to filter PaymentHistories to count.
     * @example
     * // Count the number of PaymentHistories
     * const count = await prisma.paymentHistory.count({
     *   where: {
     *     // ... the filter for the PaymentHistories we want to count
     *   }
     * })
    **/
    count<T extends PaymentHistoryCountArgs>(
      args?: Subset<T, PaymentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentHistoryAggregateArgs>(args: Subset<T, PaymentHistoryAggregateArgs>): Prisma.PrismaPromise<GetPaymentHistoryAggregateType<T>>

    /**
     * Group by PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PaymentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentHistory model
   */
  readonly fields: PaymentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentHistory model
   */
  interface PaymentHistoryFieldRefs {
    readonly id: FieldRef<"PaymentHistory", 'String'>
    readonly ownerId: FieldRef<"PaymentHistory", 'String'>
    readonly payedBy: FieldRef<"PaymentHistory", 'String'>
    readonly totalAmount: FieldRef<"PaymentHistory", 'Float'>
    readonly roomId: FieldRef<"PaymentHistory", 'String'>
    readonly payedamount: FieldRef<"PaymentHistory", 'Float'>
    readonly dueAmount: FieldRef<"PaymentHistory", 'Float'>
    readonly startedDate: FieldRef<"PaymentHistory", 'DateTime'>
    readonly createdAt: FieldRef<"PaymentHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentHistory findUnique
   */
  export type PaymentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findUniqueOrThrow
   */
  export type PaymentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findFirst
   */
  export type PaymentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findFirstOrThrow
   */
  export type PaymentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findMany
   */
  export type PaymentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistories to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory create
   */
  export type PaymentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentHistory.
     */
    data: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
  }

  /**
   * PaymentHistory createMany
   */
  export type PaymentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
  }

  /**
   * PaymentHistory update
   */
  export type PaymentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentHistory.
     */
    data: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
    /**
     * Choose, which PaymentHistory to update.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory updateMany
   */
  export type PaymentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to update.
     */
    limit?: number
  }

  /**
   * PaymentHistory upsert
   */
  export type PaymentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentHistory to update in case it exists.
     */
    where: PaymentHistoryWhereUniqueInput
    /**
     * In case the PaymentHistory found by the `where` argument doesn't exist, create a new PaymentHistory with this data.
     */
    create: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
    /**
     * In case the PaymentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
  }

  /**
   * PaymentHistory delete
   */
  export type PaymentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter which PaymentHistory to delete.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory deleteMany
   */
  export type PaymentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistories to delete
     */
    where?: PaymentHistoryWhereInput
    /**
     * Limit how many PaymentHistories to delete.
     */
    limit?: number
  }

  /**
   * PaymentHistory findRaw
   */
  export type PaymentHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PaymentHistory aggregateRaw
   */
  export type PaymentHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PaymentHistory without action
   */
  export type PaymentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentHistory
     */
    omit?: PaymentHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
  }


  /**
   * Model SavedPost
   */

  export type AggregateSavedPost = {
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  export type SavedPostMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    savedDate: Date | null
    createdAt: Date | null
  }

  export type SavedPostMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    savedDate: Date | null
    createdAt: Date | null
  }

  export type SavedPostCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    savedDate: number
    createdAt: number
    _all: number
  }


  export type SavedPostMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    savedDate?: true
    createdAt?: true
  }

  export type SavedPostMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    savedDate?: true
    createdAt?: true
  }

  export type SavedPostCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    savedDate?: true
    createdAt?: true
    _all?: true
  }

  export type SavedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPost to aggregate.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedPosts
    **/
    _count?: true | SavedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedPostMaxAggregateInputType
  }

  export type GetSavedPostAggregateType<T extends SavedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedPost[P]>
      : GetScalarType<T[P], AggregateSavedPost[P]>
  }




  export type SavedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithAggregationInput | SavedPostOrderByWithAggregationInput[]
    by: SavedPostScalarFieldEnum[] | SavedPostScalarFieldEnum
    having?: SavedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedPostCountAggregateInputType | true
    _min?: SavedPostMinAggregateInputType
    _max?: SavedPostMaxAggregateInputType
  }

  export type SavedPostGroupByOutputType = {
    id: string
    postId: string
    userId: string
    savedDate: Date
    createdAt: Date
    _count: SavedPostCountAggregateOutputType | null
    _min: SavedPostMinAggregateOutputType | null
    _max: SavedPostMaxAggregateOutputType | null
  }

  type GetSavedPostGroupByPayload<T extends SavedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
            : GetScalarType<T[P], SavedPostGroupByOutputType[P]>
        }
      >
    >


  export type SavedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    savedDate?: boolean
    createdAt?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedPost"]>



  export type SavedPostSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    savedDate?: boolean
    createdAt?: boolean
  }

  export type SavedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "savedDate" | "createdAt", ExtArgs["result"]["savedPost"]>
  export type SavedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedPost"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      savedDate: Date
      createdAt: Date
    }, ExtArgs["result"]["savedPost"]>
    composites: {}
  }

  type SavedPostGetPayload<S extends boolean | null | undefined | SavedPostDefaultArgs> = $Result.GetResult<Prisma.$SavedPostPayload, S>

  type SavedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedPostCountAggregateInputType | true
    }

  export interface SavedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedPost'], meta: { name: 'SavedPost' } }
    /**
     * Find zero or one SavedPost that matches the filter.
     * @param {SavedPostFindUniqueArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedPostFindUniqueArgs>(args: SelectSubset<T, SavedPostFindUniqueArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedPostFindUniqueOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedPostFindFirstArgs>(args?: SelectSubset<T, SavedPostFindFirstArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindFirstOrThrowArgs} args - Arguments to find a SavedPost
     * @example
     * // Get one SavedPost
     * const savedPost = await prisma.savedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedPosts
     * const savedPosts = await prisma.savedPost.findMany()
     * 
     * // Get first 10 SavedPosts
     * const savedPosts = await prisma.savedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedPostWithIdOnly = await prisma.savedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedPostFindManyArgs>(args?: SelectSubset<T, SavedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedPost.
     * @param {SavedPostCreateArgs} args - Arguments to create a SavedPost.
     * @example
     * // Create one SavedPost
     * const SavedPost = await prisma.savedPost.create({
     *   data: {
     *     // ... data to create a SavedPost
     *   }
     * })
     * 
     */
    create<T extends SavedPostCreateArgs>(args: SelectSubset<T, SavedPostCreateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedPosts.
     * @param {SavedPostCreateManyArgs} args - Arguments to create many SavedPosts.
     * @example
     * // Create many SavedPosts
     * const savedPost = await prisma.savedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedPostCreateManyArgs>(args?: SelectSubset<T, SavedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavedPost.
     * @param {SavedPostDeleteArgs} args - Arguments to delete one SavedPost.
     * @example
     * // Delete one SavedPost
     * const SavedPost = await prisma.savedPost.delete({
     *   where: {
     *     // ... filter to delete one SavedPost
     *   }
     * })
     * 
     */
    delete<T extends SavedPostDeleteArgs>(args: SelectSubset<T, SavedPostDeleteArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedPost.
     * @param {SavedPostUpdateArgs} args - Arguments to update one SavedPost.
     * @example
     * // Update one SavedPost
     * const savedPost = await prisma.savedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedPostUpdateArgs>(args: SelectSubset<T, SavedPostUpdateArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedPosts.
     * @param {SavedPostDeleteManyArgs} args - Arguments to filter SavedPosts to delete.
     * @example
     * // Delete a few SavedPosts
     * const { count } = await prisma.savedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedPostDeleteManyArgs>(args?: SelectSubset<T, SavedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedPosts
     * const savedPost = await prisma.savedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedPostUpdateManyArgs>(args: SelectSubset<T, SavedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedPost.
     * @param {SavedPostUpsertArgs} args - Arguments to update or create a SavedPost.
     * @example
     * // Update or create a SavedPost
     * const savedPost = await prisma.savedPost.upsert({
     *   create: {
     *     // ... data to create a SavedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedPost we want to update
     *   }
     * })
     */
    upsert<T extends SavedPostUpsertArgs>(args: SelectSubset<T, SavedPostUpsertArgs<ExtArgs>>): Prisma__SavedPostClient<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedPosts that matches the filter.
     * @param {SavedPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const savedPost = await prisma.savedPost.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SavedPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SavedPost.
     * @param {SavedPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const savedPost = await prisma.savedPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SavedPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SavedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostCountArgs} args - Arguments to filter SavedPosts to count.
     * @example
     * // Count the number of SavedPosts
     * const count = await prisma.savedPost.count({
     *   where: {
     *     // ... the filter for the SavedPosts we want to count
     *   }
     * })
    **/
    count<T extends SavedPostCountArgs>(
      args?: Subset<T, SavedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedPostAggregateArgs>(args: Subset<T, SavedPostAggregateArgs>): Prisma.PrismaPromise<GetSavedPostAggregateType<T>>

    /**
     * Group by SavedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedPostGroupByArgs['orderBy'] }
        : { orderBy?: SavedPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedPost model
   */
  readonly fields: SavedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedPost model
   */
  interface SavedPostFieldRefs {
    readonly id: FieldRef<"SavedPost", 'String'>
    readonly postId: FieldRef<"SavedPost", 'String'>
    readonly userId: FieldRef<"SavedPost", 'String'>
    readonly savedDate: FieldRef<"SavedPost", 'DateTime'>
    readonly createdAt: FieldRef<"SavedPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedPost findUnique
   */
  export type SavedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findUniqueOrThrow
   */
  export type SavedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost findFirst
   */
  export type SavedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findFirstOrThrow
   */
  export type SavedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPost to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedPosts.
     */
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost findMany
   */
  export type SavedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter, which SavedPosts to fetch.
     */
    where?: SavedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedPosts to fetch.
     */
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedPosts.
     */
    cursor?: SavedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedPosts.
     */
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * SavedPost create
   */
  export type SavedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedPost.
     */
    data: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
  }

  /**
   * SavedPost createMany
   */
  export type SavedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedPosts.
     */
    data: SavedPostCreateManyInput | SavedPostCreateManyInput[]
  }

  /**
   * SavedPost update
   */
  export type SavedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedPost.
     */
    data: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
    /**
     * Choose, which SavedPost to update.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost updateMany
   */
  export type SavedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedPosts.
     */
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyInput>
    /**
     * Filter which SavedPosts to update
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to update.
     */
    limit?: number
  }

  /**
   * SavedPost upsert
   */
  export type SavedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedPost to update in case it exists.
     */
    where: SavedPostWhereUniqueInput
    /**
     * In case the SavedPost found by the `where` argument doesn't exist, create a new SavedPost with this data.
     */
    create: XOR<SavedPostCreateInput, SavedPostUncheckedCreateInput>
    /**
     * In case the SavedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedPostUpdateInput, SavedPostUncheckedUpdateInput>
  }

  /**
   * SavedPost delete
   */
  export type SavedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    /**
     * Filter which SavedPost to delete.
     */
    where: SavedPostWhereUniqueInput
  }

  /**
   * SavedPost deleteMany
   */
  export type SavedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedPosts to delete
     */
    where?: SavedPostWhereInput
    /**
     * Limit how many SavedPosts to delete.
     */
    limit?: number
  }

  /**
   * SavedPost findRaw
   */
  export type SavedPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavedPost aggregateRaw
   */
  export type SavedPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavedPost without action
   */
  export type SavedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    roomId: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    roomId?: true
    ownerId?: true
    createdAt?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    roomId?: true
    ownerId?: true
    createdAt?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    roomId?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    roomId: string
    ownerId: string
    createdAt: Date
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    savedPost?: boolean | Posts$savedPostArgs<ExtArgs>
    totalCount?: boolean | Posts$totalCountArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>



  export type PostsSelectScalar = {
    id?: boolean
    roomId?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "ownerId" | "createdAt", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    savedPost?: boolean | Posts$savedPostArgs<ExtArgs>
    totalCount?: boolean | Posts$totalCountArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      savedPost: Prisma.$SavedPostPayload<ExtArgs>[]
      totalCount: Prisma.$PostViewCountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      ownerId: string
      createdAt: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const posts = await prisma.posts.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PostsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Posts.
     * @param {PostsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const posts = await prisma.posts.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PostsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    savedPost<T extends Posts$savedPostArgs<ExtArgs> = {}>(args?: Subset<T, Posts$savedPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    totalCount<T extends Posts$totalCountArgs<ExtArgs> = {}>(args?: Subset<T, Posts$totalCountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'String'>
    readonly roomId: FieldRef<"Posts", 'String'>
    readonly ownerId: FieldRef<"Posts", 'String'>
    readonly createdAt: FieldRef<"Posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts findRaw
   */
  export type PostsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Posts aggregateRaw
   */
  export type PostsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Posts.savedPost
   */
  export type Posts$savedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedPost
     */
    select?: SavedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedPost
     */
    omit?: SavedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedPostInclude<ExtArgs> | null
    where?: SavedPostWhereInput
    orderBy?: SavedPostOrderByWithRelationInput | SavedPostOrderByWithRelationInput[]
    cursor?: SavedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedPostScalarFieldEnum | SavedPostScalarFieldEnum[]
  }

  /**
   * Posts.totalCount
   */
  export type Posts$totalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    where?: PostViewCountWhereInput
    orderBy?: PostViewCountOrderByWithRelationInput | PostViewCountOrderByWithRelationInput[]
    cursor?: PostViewCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostViewCountScalarFieldEnum | PostViewCountScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model PostViewCount
   */

  export type AggregatePostViewCount = {
    _count: PostViewCountCountAggregateOutputType | null
    _min: PostViewCountMinAggregateOutputType | null
    _max: PostViewCountMaxAggregateOutputType | null
  }

  export type PostViewCountMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    viewDate: Date | null
  }

  export type PostViewCountMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    viewDate: Date | null
  }

  export type PostViewCountCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    viewDate: number
    _all: number
  }


  export type PostViewCountMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    viewDate?: true
  }

  export type PostViewCountMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    viewDate?: true
  }

  export type PostViewCountCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    viewDate?: true
    _all?: true
  }

  export type PostViewCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostViewCount to aggregate.
     */
    where?: PostViewCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViewCounts to fetch.
     */
    orderBy?: PostViewCountOrderByWithRelationInput | PostViewCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostViewCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViewCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViewCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostViewCounts
    **/
    _count?: true | PostViewCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostViewCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostViewCountMaxAggregateInputType
  }

  export type GetPostViewCountAggregateType<T extends PostViewCountAggregateArgs> = {
        [P in keyof T & keyof AggregatePostViewCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostViewCount[P]>
      : GetScalarType<T[P], AggregatePostViewCount[P]>
  }




  export type PostViewCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewCountWhereInput
    orderBy?: PostViewCountOrderByWithAggregationInput | PostViewCountOrderByWithAggregationInput[]
    by: PostViewCountScalarFieldEnum[] | PostViewCountScalarFieldEnum
    having?: PostViewCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostViewCountCountAggregateInputType | true
    _min?: PostViewCountMinAggregateInputType
    _max?: PostViewCountMaxAggregateInputType
  }

  export type PostViewCountGroupByOutputType = {
    id: string
    postId: string
    userId: string
    viewDate: Date
    _count: PostViewCountCountAggregateOutputType | null
    _min: PostViewCountMinAggregateOutputType | null
    _max: PostViewCountMaxAggregateOutputType | null
  }

  type GetPostViewCountGroupByPayload<T extends PostViewCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostViewCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostViewCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostViewCountGroupByOutputType[P]>
            : GetScalarType<T[P], PostViewCountGroupByOutputType[P]>
        }
      >
    >


  export type PostViewCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    viewDate?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postViewCount"]>



  export type PostViewCountSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    viewDate?: boolean
  }

  export type PostViewCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "viewDate", ExtArgs["result"]["postViewCount"]>
  export type PostViewCountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostViewCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostViewCount"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      viewDate: Date
    }, ExtArgs["result"]["postViewCount"]>
    composites: {}
  }

  type PostViewCountGetPayload<S extends boolean | null | undefined | PostViewCountDefaultArgs> = $Result.GetResult<Prisma.$PostViewCountPayload, S>

  type PostViewCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostViewCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostViewCountCountAggregateInputType | true
    }

  export interface PostViewCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostViewCount'], meta: { name: 'PostViewCount' } }
    /**
     * Find zero or one PostViewCount that matches the filter.
     * @param {PostViewCountFindUniqueArgs} args - Arguments to find a PostViewCount
     * @example
     * // Get one PostViewCount
     * const postViewCount = await prisma.postViewCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostViewCountFindUniqueArgs>(args: SelectSubset<T, PostViewCountFindUniqueArgs<ExtArgs>>): Prisma__PostViewCountClient<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostViewCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostViewCountFindUniqueOrThrowArgs} args - Arguments to find a PostViewCount
     * @example
     * // Get one PostViewCount
     * const postViewCount = await prisma.postViewCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostViewCountFindUniqueOrThrowArgs>(args: SelectSubset<T, PostViewCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostViewCountClient<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostViewCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountFindFirstArgs} args - Arguments to find a PostViewCount
     * @example
     * // Get one PostViewCount
     * const postViewCount = await prisma.postViewCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostViewCountFindFirstArgs>(args?: SelectSubset<T, PostViewCountFindFirstArgs<ExtArgs>>): Prisma__PostViewCountClient<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostViewCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountFindFirstOrThrowArgs} args - Arguments to find a PostViewCount
     * @example
     * // Get one PostViewCount
     * const postViewCount = await prisma.postViewCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostViewCountFindFirstOrThrowArgs>(args?: SelectSubset<T, PostViewCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostViewCountClient<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostViewCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostViewCounts
     * const postViewCounts = await prisma.postViewCount.findMany()
     * 
     * // Get first 10 PostViewCounts
     * const postViewCounts = await prisma.postViewCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postViewCountWithIdOnly = await prisma.postViewCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostViewCountFindManyArgs>(args?: SelectSubset<T, PostViewCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostViewCount.
     * @param {PostViewCountCreateArgs} args - Arguments to create a PostViewCount.
     * @example
     * // Create one PostViewCount
     * const PostViewCount = await prisma.postViewCount.create({
     *   data: {
     *     // ... data to create a PostViewCount
     *   }
     * })
     * 
     */
    create<T extends PostViewCountCreateArgs>(args: SelectSubset<T, PostViewCountCreateArgs<ExtArgs>>): Prisma__PostViewCountClient<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostViewCounts.
     * @param {PostViewCountCreateManyArgs} args - Arguments to create many PostViewCounts.
     * @example
     * // Create many PostViewCounts
     * const postViewCount = await prisma.postViewCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostViewCountCreateManyArgs>(args?: SelectSubset<T, PostViewCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostViewCount.
     * @param {PostViewCountDeleteArgs} args - Arguments to delete one PostViewCount.
     * @example
     * // Delete one PostViewCount
     * const PostViewCount = await prisma.postViewCount.delete({
     *   where: {
     *     // ... filter to delete one PostViewCount
     *   }
     * })
     * 
     */
    delete<T extends PostViewCountDeleteArgs>(args: SelectSubset<T, PostViewCountDeleteArgs<ExtArgs>>): Prisma__PostViewCountClient<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostViewCount.
     * @param {PostViewCountUpdateArgs} args - Arguments to update one PostViewCount.
     * @example
     * // Update one PostViewCount
     * const postViewCount = await prisma.postViewCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostViewCountUpdateArgs>(args: SelectSubset<T, PostViewCountUpdateArgs<ExtArgs>>): Prisma__PostViewCountClient<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostViewCounts.
     * @param {PostViewCountDeleteManyArgs} args - Arguments to filter PostViewCounts to delete.
     * @example
     * // Delete a few PostViewCounts
     * const { count } = await prisma.postViewCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostViewCountDeleteManyArgs>(args?: SelectSubset<T, PostViewCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostViewCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostViewCounts
     * const postViewCount = await prisma.postViewCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostViewCountUpdateManyArgs>(args: SelectSubset<T, PostViewCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostViewCount.
     * @param {PostViewCountUpsertArgs} args - Arguments to update or create a PostViewCount.
     * @example
     * // Update or create a PostViewCount
     * const postViewCount = await prisma.postViewCount.upsert({
     *   create: {
     *     // ... data to create a PostViewCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostViewCount we want to update
     *   }
     * })
     */
    upsert<T extends PostViewCountUpsertArgs>(args: SelectSubset<T, PostViewCountUpsertArgs<ExtArgs>>): Prisma__PostViewCountClient<$Result.GetResult<Prisma.$PostViewCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostViewCounts that matches the filter.
     * @param {PostViewCountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const postViewCount = await prisma.postViewCount.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PostViewCountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PostViewCount.
     * @param {PostViewCountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const postViewCount = await prisma.postViewCount.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PostViewCountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PostViewCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountCountArgs} args - Arguments to filter PostViewCounts to count.
     * @example
     * // Count the number of PostViewCounts
     * const count = await prisma.postViewCount.count({
     *   where: {
     *     // ... the filter for the PostViewCounts we want to count
     *   }
     * })
    **/
    count<T extends PostViewCountCountArgs>(
      args?: Subset<T, PostViewCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostViewCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostViewCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostViewCountAggregateArgs>(args: Subset<T, PostViewCountAggregateArgs>): Prisma.PrismaPromise<GetPostViewCountAggregateType<T>>

    /**
     * Group by PostViewCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostViewCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostViewCountGroupByArgs['orderBy'] }
        : { orderBy?: PostViewCountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostViewCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostViewCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostViewCount model
   */
  readonly fields: PostViewCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostViewCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostViewCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostViewCount model
   */
  interface PostViewCountFieldRefs {
    readonly id: FieldRef<"PostViewCount", 'String'>
    readonly postId: FieldRef<"PostViewCount", 'String'>
    readonly userId: FieldRef<"PostViewCount", 'String'>
    readonly viewDate: FieldRef<"PostViewCount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostViewCount findUnique
   */
  export type PostViewCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * Filter, which PostViewCount to fetch.
     */
    where: PostViewCountWhereUniqueInput
  }

  /**
   * PostViewCount findUniqueOrThrow
   */
  export type PostViewCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * Filter, which PostViewCount to fetch.
     */
    where: PostViewCountWhereUniqueInput
  }

  /**
   * PostViewCount findFirst
   */
  export type PostViewCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * Filter, which PostViewCount to fetch.
     */
    where?: PostViewCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViewCounts to fetch.
     */
    orderBy?: PostViewCountOrderByWithRelationInput | PostViewCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViewCounts.
     */
    cursor?: PostViewCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViewCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViewCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViewCounts.
     */
    distinct?: PostViewCountScalarFieldEnum | PostViewCountScalarFieldEnum[]
  }

  /**
   * PostViewCount findFirstOrThrow
   */
  export type PostViewCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * Filter, which PostViewCount to fetch.
     */
    where?: PostViewCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViewCounts to fetch.
     */
    orderBy?: PostViewCountOrderByWithRelationInput | PostViewCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViewCounts.
     */
    cursor?: PostViewCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViewCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViewCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViewCounts.
     */
    distinct?: PostViewCountScalarFieldEnum | PostViewCountScalarFieldEnum[]
  }

  /**
   * PostViewCount findMany
   */
  export type PostViewCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * Filter, which PostViewCounts to fetch.
     */
    where?: PostViewCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViewCounts to fetch.
     */
    orderBy?: PostViewCountOrderByWithRelationInput | PostViewCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostViewCounts.
     */
    cursor?: PostViewCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViewCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViewCounts.
     */
    skip?: number
    distinct?: PostViewCountScalarFieldEnum | PostViewCountScalarFieldEnum[]
  }

  /**
   * PostViewCount create
   */
  export type PostViewCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * The data needed to create a PostViewCount.
     */
    data: XOR<PostViewCountCreateInput, PostViewCountUncheckedCreateInput>
  }

  /**
   * PostViewCount createMany
   */
  export type PostViewCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostViewCounts.
     */
    data: PostViewCountCreateManyInput | PostViewCountCreateManyInput[]
  }

  /**
   * PostViewCount update
   */
  export type PostViewCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * The data needed to update a PostViewCount.
     */
    data: XOR<PostViewCountUpdateInput, PostViewCountUncheckedUpdateInput>
    /**
     * Choose, which PostViewCount to update.
     */
    where: PostViewCountWhereUniqueInput
  }

  /**
   * PostViewCount updateMany
   */
  export type PostViewCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostViewCounts.
     */
    data: XOR<PostViewCountUpdateManyMutationInput, PostViewCountUncheckedUpdateManyInput>
    /**
     * Filter which PostViewCounts to update
     */
    where?: PostViewCountWhereInput
    /**
     * Limit how many PostViewCounts to update.
     */
    limit?: number
  }

  /**
   * PostViewCount upsert
   */
  export type PostViewCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * The filter to search for the PostViewCount to update in case it exists.
     */
    where: PostViewCountWhereUniqueInput
    /**
     * In case the PostViewCount found by the `where` argument doesn't exist, create a new PostViewCount with this data.
     */
    create: XOR<PostViewCountCreateInput, PostViewCountUncheckedCreateInput>
    /**
     * In case the PostViewCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostViewCountUpdateInput, PostViewCountUncheckedUpdateInput>
  }

  /**
   * PostViewCount delete
   */
  export type PostViewCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
    /**
     * Filter which PostViewCount to delete.
     */
    where: PostViewCountWhereUniqueInput
  }

  /**
   * PostViewCount deleteMany
   */
  export type PostViewCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostViewCounts to delete
     */
    where?: PostViewCountWhereInput
    /**
     * Limit how many PostViewCounts to delete.
     */
    limit?: number
  }

  /**
   * PostViewCount findRaw
   */
  export type PostViewCountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PostViewCount aggregateRaw
   */
  export type PostViewCountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PostViewCount without action
   */
  export type PostViewCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostViewCount
     */
    select?: PostViewCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostViewCount
     */
    omit?: PostViewCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewCountInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    phoneNumber: 'phoneNumber',
    role: 'role',
    isOnboarded: 'isOnboarded',
    isVerified: 'isVerified',
    isAssignedOwner: 'isAssignedOwner',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const UserRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    requestedRole: 'requestedRole',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type UserRequestScalarFieldEnum = (typeof UserRequestScalarFieldEnum)[keyof typeof UserRequestScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    renewalDate: 'renewalDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    roomStatus: 'roomStatus',
    province: 'province',
    location: 'location',
    lon: 'lon',
    lat: 'lat',
    roomNumber: 'roomNumber',
    title: 'title',
    description: 'description',
    roomImages: 'roomImages',
    numberOfRooms: 'numberOfRooms',
    beds: 'beds',
    toilet: 'toilet',
    clients: 'clients',
    roomCapacity: 'roomCapacity',
    roomType: 'roomType',
    roomFor: 'roomFor',
    dueAmount: 'dueAmount',
    clientInitationData: 'clientInitationData',
    startedPriceFromDate: 'startedPriceFromDate',
    lastPayedDate: 'lastPayedDate',
    createdAt: 'createdAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomBillingScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    roomId: 'roomId',
    water: 'water',
    electricity: 'electricity',
    internet: 'internet',
    roomCost: 'roomCost',
    createdAt: 'createdAt'
  };

  export type RoomBillingScalarFieldEnum = (typeof RoomBillingScalarFieldEnum)[keyof typeof RoomBillingScalarFieldEnum]


  export const RoomPaymentRecordScalarFieldEnum: {
    id: 'id',
    description: 'description',
    ownerId: 'ownerId',
    roomId: 'roomId',
    payedBy: 'payedBy',
    amountTotal: 'amountTotal',
    payedAmount: 'payedAmount',
    dueAmount: 'dueAmount',
    paymentStatus: 'paymentStatus',
    dueMoneyReason: 'dueMoneyReason',
    createdAt: 'createdAt'
  };

  export type RoomPaymentRecordScalarFieldEnum = (typeof RoomPaymentRecordScalarFieldEnum)[keyof typeof RoomPaymentRecordScalarFieldEnum]


  export const PaymentHistoryScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    payedBy: 'payedBy',
    totalAmount: 'totalAmount',
    roomId: 'roomId',
    payedamount: 'payedamount',
    dueAmount: 'dueAmount',
    startedDate: 'startedDate',
    createdAt: 'createdAt'
  };

  export type PaymentHistoryScalarFieldEnum = (typeof PaymentHistoryScalarFieldEnum)[keyof typeof PaymentHistoryScalarFieldEnum]


  export const SavedPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    savedDate: 'savedDate',
    createdAt: 'createdAt'
  };

  export type SavedPostScalarFieldEnum = (typeof SavedPostScalarFieldEnum)[keyof typeof SavedPostScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const PostViewCountScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    viewDate: 'viewDate'
  };

  export type PostViewCountScalarFieldEnum = (typeof PostViewCountScalarFieldEnum)[keyof typeof PostViewCountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SubscriptionType'
   */
  export type EnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType'>
    


  /**
   * Reference to a field of type 'SubscriptionType[]'
   */
  export type ListEnumSubscriptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionType[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RoomType'
   */
  export type EnumRoomTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomType'>
    


  /**
   * Reference to a field of type 'RoomType[]'
   */
  export type ListEnumRoomTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomType[]'>
    


  /**
   * Reference to a field of type 'RoomFor'
   */
  export type EnumRoomForFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomFor'>
    


  /**
   * Reference to a field of type 'RoomFor[]'
   */
  export type ListEnumRoomForFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomFor[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isOnboarded?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    isAssignedOwner?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    userRequest?: UserRequestListRelationFilter
    subscriptionPlan?: SubscriptionPlanListRelationFilter
    room?: RoomListRelationFilter
    roomBilling?: RoomBillingListRelationFilter
    paymentHistory?: PaymentHistoryListRelationFilter
    client?: PaymentHistoryListRelationFilter
    roomPaymentRecord?: RoomPaymentRecordListRelationFilter
    payedBy?: RoomPaymentRecordListRelationFilter
    posts?: PostsListRelationFilter
    savedPost?: SavedPostListRelationFilter
    postViewCount?: PostViewCountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    isVerified?: SortOrder
    isAssignedOwner?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    userRequest?: UserRequestOrderByRelationAggregateInput
    subscriptionPlan?: SubscriptionPlanOrderByRelationAggregateInput
    room?: RoomOrderByRelationAggregateInput
    roomBilling?: RoomBillingOrderByRelationAggregateInput
    paymentHistory?: PaymentHistoryOrderByRelationAggregateInput
    client?: PaymentHistoryOrderByRelationAggregateInput
    roomPaymentRecord?: RoomPaymentRecordOrderByRelationAggregateInput
    payedBy?: RoomPaymentRecordOrderByRelationAggregateInput
    posts?: PostsOrderByRelationAggregateInput
    savedPost?: SavedPostOrderByRelationAggregateInput
    postViewCount?: PostViewCountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isOnboarded?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    isAssignedOwner?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    userRequest?: UserRequestListRelationFilter
    subscriptionPlan?: SubscriptionPlanListRelationFilter
    room?: RoomListRelationFilter
    roomBilling?: RoomBillingListRelationFilter
    paymentHistory?: PaymentHistoryListRelationFilter
    client?: PaymentHistoryListRelationFilter
    roomPaymentRecord?: RoomPaymentRecordListRelationFilter
    payedBy?: RoomPaymentRecordListRelationFilter
    posts?: PostsListRelationFilter
    savedPost?: SavedPostListRelationFilter
    postViewCount?: PostViewCountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    isVerified?: SortOrder
    isAssignedOwner?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isOnboarded?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isAssignedOwner?: BoolWithAggregatesFilter<"User"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type UserRequestWhereInput = {
    AND?: UserRequestWhereInput | UserRequestWhereInput[]
    OR?: UserRequestWhereInput[]
    NOT?: UserRequestWhereInput | UserRequestWhereInput[]
    id?: StringFilter<"UserRequest"> | string
    userId?: StringFilter<"UserRequest"> | string
    requestedRole?: EnumUserRoleFilter<"UserRequest"> | $Enums.UserRole
    updatedAt?: DateTimeFilter<"UserRequest"> | Date | string
    createdAt?: DateTimeFilter<"UserRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    requestedRole?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserRequestWhereInput | UserRequestWhereInput[]
    OR?: UserRequestWhereInput[]
    NOT?: UserRequestWhereInput | UserRequestWhereInput[]
    requestedRole?: EnumUserRoleFilter<"UserRequest"> | $Enums.UserRole
    updatedAt?: DateTimeFilter<"UserRequest"> | Date | string
    createdAt?: DateTimeFilter<"UserRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    requestedRole?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserRequestCountOrderByAggregateInput
    _max?: UserRequestMaxOrderByAggregateInput
    _min?: UserRequestMinOrderByAggregateInput
  }

  export type UserRequestScalarWhereWithAggregatesInput = {
    AND?: UserRequestScalarWhereWithAggregatesInput | UserRequestScalarWhereWithAggregatesInput[]
    OR?: UserRequestScalarWhereWithAggregatesInput[]
    NOT?: UserRequestScalarWhereWithAggregatesInput | UserRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRequest"> | string
    userId?: StringWithAggregatesFilter<"UserRequest"> | string
    requestedRole?: EnumUserRoleWithAggregatesFilter<"UserRequest"> | $Enums.UserRole
    updatedAt?: DateTimeWithAggregatesFilter<"UserRequest"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRequest"> | Date | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    userId?: StringFilter<"SubscriptionPlan"> | string
    type?: EnumSubscriptionTypeFilter<"SubscriptionPlan"> | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFilter<"SubscriptionPlan"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"SubscriptionPlan"> | Date | string | null
    renewalDate?: DateTimeNullableFilter<"SubscriptionPlan"> | Date | string | null
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewalDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    type?: EnumSubscriptionTypeFilter<"SubscriptionPlan"> | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFilter<"SubscriptionPlan"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"SubscriptionPlan"> | Date | string | null
    renewalDate?: DateTimeNullableFilter<"SubscriptionPlan"> | Date | string | null
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewalDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    userId?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    type?: EnumSubscriptionTypeWithAggregatesFilter<"SubscriptionPlan"> | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusWithAggregatesFilter<"SubscriptionPlan"> | $Enums.SubscriptionStatus
    startDate?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"SubscriptionPlan"> | Date | string | null
    renewalDate?: DateTimeNullableWithAggregatesFilter<"SubscriptionPlan"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    ownerId?: StringFilter<"Room"> | string
    roomStatus?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    province?: IntFilter<"Room"> | number
    location?: StringFilter<"Room"> | string
    lon?: FloatNullableFilter<"Room"> | number | null
    lat?: FloatNullableFilter<"Room"> | number | null
    roomNumber?: IntFilter<"Room"> | number
    title?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    roomImages?: StringNullableListFilter<"Room">
    numberOfRooms?: IntFilter<"Room"> | number
    beds?: IntFilter<"Room"> | number
    toilet?: IntFilter<"Room"> | number
    clients?: StringNullableListFilter<"Room">
    roomCapacity?: IntFilter<"Room"> | number
    roomType?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    roomFor?: EnumRoomForFilter<"Room"> | $Enums.RoomFor
    dueAmount?: FloatFilter<"Room"> | number
    clientInitationData?: DateTimeNullableFilter<"Room"> | Date | string | null
    startedPriceFromDate?: DateTimeNullableFilter<"Room"> | Date | string | null
    lastPayedDate?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    roomBilling?: XOR<RoomBillingNullableScalarRelationFilter, RoomBillingWhereInput> | null
    roomPayment?: PaymentHistoryListRelationFilter
    roomPaymentRecord?: RoomPaymentRecordListRelationFilter
    posts?: PostsListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomStatus?: SortOrder
    province?: SortOrder
    location?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    roomNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomImages?: SortOrder
    numberOfRooms?: SortOrder
    beds?: SortOrder
    toilet?: SortOrder
    clients?: SortOrder
    roomCapacity?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    dueAmount?: SortOrder
    clientInitationData?: SortOrder
    startedPriceFromDate?: SortOrder
    lastPayedDate?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    roomBilling?: RoomBillingOrderByWithRelationInput
    roomPayment?: PaymentHistoryOrderByRelationAggregateInput
    roomPaymentRecord?: RoomPaymentRecordOrderByRelationAggregateInput
    posts?: PostsOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    ownerId?: StringFilter<"Room"> | string
    roomStatus?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    province?: IntFilter<"Room"> | number
    location?: StringFilter<"Room"> | string
    lon?: FloatNullableFilter<"Room"> | number | null
    lat?: FloatNullableFilter<"Room"> | number | null
    roomNumber?: IntFilter<"Room"> | number
    title?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    roomImages?: StringNullableListFilter<"Room">
    numberOfRooms?: IntFilter<"Room"> | number
    beds?: IntFilter<"Room"> | number
    toilet?: IntFilter<"Room"> | number
    clients?: StringNullableListFilter<"Room">
    roomCapacity?: IntFilter<"Room"> | number
    roomType?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    roomFor?: EnumRoomForFilter<"Room"> | $Enums.RoomFor
    dueAmount?: FloatFilter<"Room"> | number
    clientInitationData?: DateTimeNullableFilter<"Room"> | Date | string | null
    startedPriceFromDate?: DateTimeNullableFilter<"Room"> | Date | string | null
    lastPayedDate?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    roomBilling?: XOR<RoomBillingNullableScalarRelationFilter, RoomBillingWhereInput> | null
    roomPayment?: PaymentHistoryListRelationFilter
    roomPaymentRecord?: RoomPaymentRecordListRelationFilter
    posts?: PostsListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomStatus?: SortOrder
    province?: SortOrder
    location?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    roomNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomImages?: SortOrder
    numberOfRooms?: SortOrder
    beds?: SortOrder
    toilet?: SortOrder
    clients?: SortOrder
    roomCapacity?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    dueAmount?: SortOrder
    clientInitationData?: SortOrder
    startedPriceFromDate?: SortOrder
    lastPayedDate?: SortOrder
    createdAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    ownerId?: StringWithAggregatesFilter<"Room"> | string
    roomStatus?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    province?: IntWithAggregatesFilter<"Room"> | number
    location?: StringWithAggregatesFilter<"Room"> | string
    lon?: FloatNullableWithAggregatesFilter<"Room"> | number | null
    lat?: FloatNullableWithAggregatesFilter<"Room"> | number | null
    roomNumber?: IntWithAggregatesFilter<"Room"> | number
    title?: StringWithAggregatesFilter<"Room"> | string
    description?: StringWithAggregatesFilter<"Room"> | string
    roomImages?: StringNullableListFilter<"Room">
    numberOfRooms?: IntWithAggregatesFilter<"Room"> | number
    beds?: IntWithAggregatesFilter<"Room"> | number
    toilet?: IntWithAggregatesFilter<"Room"> | number
    clients?: StringNullableListFilter<"Room">
    roomCapacity?: IntWithAggregatesFilter<"Room"> | number
    roomType?: EnumRoomTypeWithAggregatesFilter<"Room"> | $Enums.RoomType
    roomFor?: EnumRoomForWithAggregatesFilter<"Room"> | $Enums.RoomFor
    dueAmount?: FloatWithAggregatesFilter<"Room"> | number
    clientInitationData?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
    startedPriceFromDate?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
    lastPayedDate?: DateTimeNullableWithAggregatesFilter<"Room"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomBillingWhereInput = {
    AND?: RoomBillingWhereInput | RoomBillingWhereInput[]
    OR?: RoomBillingWhereInput[]
    NOT?: RoomBillingWhereInput | RoomBillingWhereInput[]
    id?: StringFilter<"RoomBilling"> | string
    ownerId?: StringFilter<"RoomBilling"> | string
    roomId?: StringFilter<"RoomBilling"> | string
    water?: FloatFilter<"RoomBilling"> | number
    electricity?: FloatFilter<"RoomBilling"> | number
    internet?: FloatFilter<"RoomBilling"> | number
    roomCost?: FloatFilter<"RoomBilling"> | number
    createdAt?: DateTimeFilter<"RoomBilling"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomBillingOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    water?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    roomCost?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type RoomBillingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId?: string
    AND?: RoomBillingWhereInput | RoomBillingWhereInput[]
    OR?: RoomBillingWhereInput[]
    NOT?: RoomBillingWhereInput | RoomBillingWhereInput[]
    ownerId?: StringFilter<"RoomBilling"> | string
    water?: FloatFilter<"RoomBilling"> | number
    electricity?: FloatFilter<"RoomBilling"> | number
    internet?: FloatFilter<"RoomBilling"> | number
    roomCost?: FloatFilter<"RoomBilling"> | number
    createdAt?: DateTimeFilter<"RoomBilling"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "roomId">

  export type RoomBillingOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    water?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    roomCost?: SortOrder
    createdAt?: SortOrder
    _count?: RoomBillingCountOrderByAggregateInput
    _avg?: RoomBillingAvgOrderByAggregateInput
    _max?: RoomBillingMaxOrderByAggregateInput
    _min?: RoomBillingMinOrderByAggregateInput
    _sum?: RoomBillingSumOrderByAggregateInput
  }

  export type RoomBillingScalarWhereWithAggregatesInput = {
    AND?: RoomBillingScalarWhereWithAggregatesInput | RoomBillingScalarWhereWithAggregatesInput[]
    OR?: RoomBillingScalarWhereWithAggregatesInput[]
    NOT?: RoomBillingScalarWhereWithAggregatesInput | RoomBillingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomBilling"> | string
    ownerId?: StringWithAggregatesFilter<"RoomBilling"> | string
    roomId?: StringWithAggregatesFilter<"RoomBilling"> | string
    water?: FloatWithAggregatesFilter<"RoomBilling"> | number
    electricity?: FloatWithAggregatesFilter<"RoomBilling"> | number
    internet?: FloatWithAggregatesFilter<"RoomBilling"> | number
    roomCost?: FloatWithAggregatesFilter<"RoomBilling"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoomBilling"> | Date | string
  }

  export type RoomPaymentRecordWhereInput = {
    AND?: RoomPaymentRecordWhereInput | RoomPaymentRecordWhereInput[]
    OR?: RoomPaymentRecordWhereInput[]
    NOT?: RoomPaymentRecordWhereInput | RoomPaymentRecordWhereInput[]
    id?: StringFilter<"RoomPaymentRecord"> | string
    description?: StringFilter<"RoomPaymentRecord"> | string
    ownerId?: StringFilter<"RoomPaymentRecord"> | string
    roomId?: StringFilter<"RoomPaymentRecord"> | string
    payedBy?: StringFilter<"RoomPaymentRecord"> | string
    amountTotal?: FloatFilter<"RoomPaymentRecord"> | number
    payedAmount?: FloatFilter<"RoomPaymentRecord"> | number
    dueAmount?: FloatFilter<"RoomPaymentRecord"> | number
    paymentStatus?: EnumPaymentStatusFilter<"RoomPaymentRecord"> | $Enums.PaymentStatus
    dueMoneyReason?: StringNullableFilter<"RoomPaymentRecord"> | string | null
    createdAt?: DateTimeFilter<"RoomPaymentRecord"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomPaymentRecordOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    payedBy?: SortOrder
    amountTotal?: SortOrder
    payedAmount?: SortOrder
    dueAmount?: SortOrder
    paymentStatus?: SortOrder
    dueMoneyReason?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    client?: UserOrderByWithRelationInput
  }

  export type RoomPaymentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomPaymentRecordWhereInput | RoomPaymentRecordWhereInput[]
    OR?: RoomPaymentRecordWhereInput[]
    NOT?: RoomPaymentRecordWhereInput | RoomPaymentRecordWhereInput[]
    description?: StringFilter<"RoomPaymentRecord"> | string
    ownerId?: StringFilter<"RoomPaymentRecord"> | string
    roomId?: StringFilter<"RoomPaymentRecord"> | string
    payedBy?: StringFilter<"RoomPaymentRecord"> | string
    amountTotal?: FloatFilter<"RoomPaymentRecord"> | number
    payedAmount?: FloatFilter<"RoomPaymentRecord"> | number
    dueAmount?: FloatFilter<"RoomPaymentRecord"> | number
    paymentStatus?: EnumPaymentStatusFilter<"RoomPaymentRecord"> | $Enums.PaymentStatus
    dueMoneyReason?: StringNullableFilter<"RoomPaymentRecord"> | string | null
    createdAt?: DateTimeFilter<"RoomPaymentRecord"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RoomPaymentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    payedBy?: SortOrder
    amountTotal?: SortOrder
    payedAmount?: SortOrder
    dueAmount?: SortOrder
    paymentStatus?: SortOrder
    dueMoneyReason?: SortOrder
    createdAt?: SortOrder
    _count?: RoomPaymentRecordCountOrderByAggregateInput
    _avg?: RoomPaymentRecordAvgOrderByAggregateInput
    _max?: RoomPaymentRecordMaxOrderByAggregateInput
    _min?: RoomPaymentRecordMinOrderByAggregateInput
    _sum?: RoomPaymentRecordSumOrderByAggregateInput
  }

  export type RoomPaymentRecordScalarWhereWithAggregatesInput = {
    AND?: RoomPaymentRecordScalarWhereWithAggregatesInput | RoomPaymentRecordScalarWhereWithAggregatesInput[]
    OR?: RoomPaymentRecordScalarWhereWithAggregatesInput[]
    NOT?: RoomPaymentRecordScalarWhereWithAggregatesInput | RoomPaymentRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomPaymentRecord"> | string
    description?: StringWithAggregatesFilter<"RoomPaymentRecord"> | string
    ownerId?: StringWithAggregatesFilter<"RoomPaymentRecord"> | string
    roomId?: StringWithAggregatesFilter<"RoomPaymentRecord"> | string
    payedBy?: StringWithAggregatesFilter<"RoomPaymentRecord"> | string
    amountTotal?: FloatWithAggregatesFilter<"RoomPaymentRecord"> | number
    payedAmount?: FloatWithAggregatesFilter<"RoomPaymentRecord"> | number
    dueAmount?: FloatWithAggregatesFilter<"RoomPaymentRecord"> | number
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"RoomPaymentRecord"> | $Enums.PaymentStatus
    dueMoneyReason?: StringNullableWithAggregatesFilter<"RoomPaymentRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RoomPaymentRecord"> | Date | string
  }

  export type PaymentHistoryWhereInput = {
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    id?: StringFilter<"PaymentHistory"> | string
    ownerId?: StringFilter<"PaymentHistory"> | string
    payedBy?: StringFilter<"PaymentHistory"> | string
    totalAmount?: FloatFilter<"PaymentHistory"> | number
    roomId?: StringFilter<"PaymentHistory"> | string
    payedamount?: FloatFilter<"PaymentHistory"> | number
    dueAmount?: FloatFilter<"PaymentHistory"> | number
    startedDate?: DateTimeFilter<"PaymentHistory"> | Date | string
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type PaymentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    payedBy?: SortOrder
    totalAmount?: SortOrder
    roomId?: SortOrder
    payedamount?: SortOrder
    dueAmount?: SortOrder
    startedDate?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    client?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type PaymentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId?: string
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    ownerId?: StringFilter<"PaymentHistory"> | string
    payedBy?: StringFilter<"PaymentHistory"> | string
    totalAmount?: FloatFilter<"PaymentHistory"> | number
    payedamount?: FloatFilter<"PaymentHistory"> | number
    dueAmount?: FloatFilter<"PaymentHistory"> | number
    startedDate?: DateTimeFilter<"PaymentHistory"> | Date | string
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "roomId">

  export type PaymentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    payedBy?: SortOrder
    totalAmount?: SortOrder
    roomId?: SortOrder
    payedamount?: SortOrder
    dueAmount?: SortOrder
    startedDate?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentHistoryCountOrderByAggregateInput
    _avg?: PaymentHistoryAvgOrderByAggregateInput
    _max?: PaymentHistoryMaxOrderByAggregateInput
    _min?: PaymentHistoryMinOrderByAggregateInput
    _sum?: PaymentHistorySumOrderByAggregateInput
  }

  export type PaymentHistoryScalarWhereWithAggregatesInput = {
    AND?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    OR?: PaymentHistoryScalarWhereWithAggregatesInput[]
    NOT?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentHistory"> | string
    ownerId?: StringWithAggregatesFilter<"PaymentHistory"> | string
    payedBy?: StringWithAggregatesFilter<"PaymentHistory"> | string
    totalAmount?: FloatWithAggregatesFilter<"PaymentHistory"> | number
    roomId?: StringWithAggregatesFilter<"PaymentHistory"> | string
    payedamount?: FloatWithAggregatesFilter<"PaymentHistory"> | number
    dueAmount?: FloatWithAggregatesFilter<"PaymentHistory"> | number
    startedDate?: DateTimeWithAggregatesFilter<"PaymentHistory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentHistory"> | Date | string
  }

  export type SavedPostWhereInput = {
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    savedDate?: DateTimeFilter<"SavedPost"> | Date | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedPostOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    savedDate?: SortOrder
    createdAt?: SortOrder
    post?: PostsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SavedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedPostWhereInput | SavedPostWhereInput[]
    OR?: SavedPostWhereInput[]
    NOT?: SavedPostWhereInput | SavedPostWhereInput[]
    postId?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    savedDate?: DateTimeFilter<"SavedPost"> | Date | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SavedPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    savedDate?: SortOrder
    createdAt?: SortOrder
    _count?: SavedPostCountOrderByAggregateInput
    _max?: SavedPostMaxOrderByAggregateInput
    _min?: SavedPostMinOrderByAggregateInput
  }

  export type SavedPostScalarWhereWithAggregatesInput = {
    AND?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    OR?: SavedPostScalarWhereWithAggregatesInput[]
    NOT?: SavedPostScalarWhereWithAggregatesInput | SavedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedPost"> | string
    postId?: StringWithAggregatesFilter<"SavedPost"> | string
    userId?: StringWithAggregatesFilter<"SavedPost"> | string
    savedDate?: DateTimeWithAggregatesFilter<"SavedPost"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedPost"> | Date | string
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: StringFilter<"Posts"> | string
    roomId?: StringFilter<"Posts"> | string
    ownerId?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedPost?: SavedPostListRelationFilter
    totalCount?: PostViewCountListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    savedPost?: SavedPostOrderByRelationAggregateInput
    totalCount?: PostViewCountOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    ownerId?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    savedPost?: SavedPostListRelationFilter
    totalCount?: PostViewCountListRelationFilter
  }, "id" | "roomId">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Posts"> | string
    roomId?: StringWithAggregatesFilter<"Posts"> | string
    ownerId?: StringWithAggregatesFilter<"Posts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
  }

  export type PostViewCountWhereInput = {
    AND?: PostViewCountWhereInput | PostViewCountWhereInput[]
    OR?: PostViewCountWhereInput[]
    NOT?: PostViewCountWhereInput | PostViewCountWhereInput[]
    id?: StringFilter<"PostViewCount"> | string
    postId?: StringFilter<"PostViewCount"> | string
    userId?: StringFilter<"PostViewCount"> | string
    viewDate?: DateTimeFilter<"PostViewCount"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostViewCountOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    viewDate?: SortOrder
    post?: PostsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostViewCountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostViewCountWhereInput | PostViewCountWhereInput[]
    OR?: PostViewCountWhereInput[]
    NOT?: PostViewCountWhereInput | PostViewCountWhereInput[]
    postId?: StringFilter<"PostViewCount"> | string
    userId?: StringFilter<"PostViewCount"> | string
    viewDate?: DateTimeFilter<"PostViewCount"> | Date | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostViewCountOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    viewDate?: SortOrder
    _count?: PostViewCountCountOrderByAggregateInput
    _max?: PostViewCountMaxOrderByAggregateInput
    _min?: PostViewCountMinOrderByAggregateInput
  }

  export type PostViewCountScalarWhereWithAggregatesInput = {
    AND?: PostViewCountScalarWhereWithAggregatesInput | PostViewCountScalarWhereWithAggregatesInput[]
    OR?: PostViewCountScalarWhereWithAggregatesInput[]
    NOT?: PostViewCountScalarWhereWithAggregatesInput | PostViewCountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostViewCount"> | string
    postId?: StringWithAggregatesFilter<"PostViewCount"> | string
    userId?: StringWithAggregatesFilter<"PostViewCount"> | string
    viewDate?: DateTimeWithAggregatesFilter<"PostViewCount"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRequestCreateInput = {
    id?: string
    requestedRole: $Enums.UserRole
    updatedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserRequestInput
  }

  export type UserRequestUncheckedCreateInput = {
    id?: string
    userId: string
    requestedRole: $Enums.UserRole
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserRequestUpdateInput = {
    requestedRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRequestNestedInput
  }

  export type UserRequestUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    requestedRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRequestCreateManyInput = {
    id?: string
    userId: string
    requestedRole: $Enums.UserRole
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserRequestUpdateManyMutationInput = {
    requestedRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRequestUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    requestedRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    type?: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate?: Date | string | null
    renewalDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    userId: string
    type?: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate?: Date | string | null
    renewalDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUpdateInput = {
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    userId: string
    type?: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate?: Date | string | null
    renewalDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomInput
    roomBilling?: RoomBillingCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryCreateNestedManyWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutRoomInput
    posts?: PostsCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    ownerId: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    roomBilling?: RoomBillingUncheckedCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryUncheckedCreateNestedManyWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutRoomInput
    posts?: PostsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomNestedInput
    roomBilling?: RoomBillingUpdateOneWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUpdateManyWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutRoomNestedInput
    posts?: PostsUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomBilling?: RoomBillingUncheckedUpdateOneWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUncheckedUpdateManyWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutRoomNestedInput
    posts?: PostsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    ownerId: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBillingCreateInput = {
    id?: string
    water?: number
    electricity?: number
    internet?: number
    roomCost?: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomBillingInput
    room: RoomCreateNestedOneWithoutRoomBillingInput
  }

  export type RoomBillingUncheckedCreateInput = {
    id?: string
    ownerId: string
    roomId: string
    water?: number
    electricity?: number
    internet?: number
    roomCost?: number
    createdAt?: Date | string
  }

  export type RoomBillingUpdateInput = {
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomBillingNestedInput
    room?: RoomUpdateOneRequiredWithoutRoomBillingNestedInput
  }

  export type RoomBillingUncheckedUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBillingCreateManyInput = {
    id?: string
    ownerId: string
    roomId: string
    water?: number
    electricity?: number
    internet?: number
    roomCost?: number
    createdAt?: Date | string
  }

  export type RoomBillingUpdateManyMutationInput = {
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBillingUncheckedUpdateManyInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordCreateInput = {
    id?: string
    description: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomPaymentRecordInput
    room: RoomCreateNestedOneWithoutRoomPaymentRecordInput
    client: UserCreateNestedOneWithoutPayedByInput
  }

  export type RoomPaymentRecordUncheckedCreateInput = {
    id?: string
    description: string
    ownerId: string
    roomId: string
    payedBy: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
  }

  export type RoomPaymentRecordUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomPaymentRecordNestedInput
    room?: RoomUpdateOneRequiredWithoutRoomPaymentRecordNestedInput
    client?: UserUpdateOneRequiredWithoutPayedByNestedInput
  }

  export type RoomPaymentRecordUncheckedUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordCreateManyInput = {
    id?: string
    description: string
    ownerId: string
    roomId: string
    payedBy: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
  }

  export type RoomPaymentRecordUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordUncheckedUpdateManyInput = {
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateInput = {
    id?: string
    totalAmount: number
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPaymentHistoryInput
    client: UserCreateNestedOneWithoutClientInput
    room: RoomCreateNestedOneWithoutRoomPaymentInput
  }

  export type PaymentHistoryUncheckedCreateInput = {
    id?: string
    ownerId: string
    payedBy: string
    totalAmount: number
    roomId: string
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPaymentHistoryNestedInput
    client?: UserUpdateOneRequiredWithoutClientNestedInput
    room?: RoomUpdateOneRequiredWithoutRoomPaymentNestedInput
  }

  export type PaymentHistoryUncheckedUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateManyInput = {
    id?: string
    ownerId: string
    payedBy: string
    totalAmount: number
    roomId: string
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateManyMutationInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostCreateInput = {
    id?: string
    savedDate?: Date | string
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutSavedPostInput
    user: UserCreateNestedOneWithoutSavedPostInput
  }

  export type SavedPostUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    savedDate?: Date | string
    createdAt?: Date | string
  }

  export type SavedPostUpdateInput = {
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutSavedPostNestedInput
    user?: UserUpdateOneRequiredWithoutSavedPostNestedInput
  }

  export type SavedPostUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostCreateManyInput = {
    id?: string
    postId: string
    userId: string
    savedDate?: Date | string
    createdAt?: Date | string
  }

  export type SavedPostUpdateManyMutationInput = {
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateInput = {
    id?: string
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutPostsInput
    owner: UserCreateNestedOneWithoutPostsInput
    savedPost?: SavedPostCreateNestedManyWithoutPostInput
    totalCount?: PostViewCountCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: string
    roomId: string
    ownerId: string
    createdAt?: Date | string
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutPostInput
    totalCount?: PostViewCountUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPostsNestedInput
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    savedPost?: SavedPostUpdateManyWithoutPostNestedInput
    totalCount?: PostViewCountUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedPost?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
    totalCount?: PostViewCountUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: string
    roomId: string
    ownerId: string
    createdAt?: Date | string
  }

  export type PostsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewCountCreateInput = {
    id?: string
    viewDate?: Date | string
    post: PostsCreateNestedOneWithoutTotalCountInput
    user: UserCreateNestedOneWithoutPostViewCountInput
  }

  export type PostViewCountUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    viewDate?: Date | string
  }

  export type PostViewCountUpdateInput = {
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutTotalCountNestedInput
    user?: UserUpdateOneRequiredWithoutPostViewCountNestedInput
  }

  export type PostViewCountUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewCountCreateManyInput = {
    id?: string
    postId: string
    userId: string
    viewDate?: Date | string
  }

  export type PostViewCountUpdateManyMutationInput = {
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewCountUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type UserRequestListRelationFilter = {
    every?: UserRequestWhereInput
    some?: UserRequestWhereInput
    none?: UserRequestWhereInput
  }

  export type SubscriptionPlanListRelationFilter = {
    every?: SubscriptionPlanWhereInput
    some?: SubscriptionPlanWhereInput
    none?: SubscriptionPlanWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomBillingListRelationFilter = {
    every?: RoomBillingWhereInput
    some?: RoomBillingWhereInput
    none?: RoomBillingWhereInput
  }

  export type PaymentHistoryListRelationFilter = {
    every?: PaymentHistoryWhereInput
    some?: PaymentHistoryWhereInput
    none?: PaymentHistoryWhereInput
  }

  export type RoomPaymentRecordListRelationFilter = {
    every?: RoomPaymentRecordWhereInput
    some?: RoomPaymentRecordWhereInput
    none?: RoomPaymentRecordWhereInput
  }

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type SavedPostListRelationFilter = {
    every?: SavedPostWhereInput
    some?: SavedPostWhereInput
    none?: SavedPostWhereInput
  }

  export type PostViewCountListRelationFilter = {
    every?: PostViewCountWhereInput
    some?: PostViewCountWhereInput
    none?: PostViewCountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomBillingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomPaymentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostViewCountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    isVerified?: SortOrder
    isAssignedOwner?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    isVerified?: SortOrder
    isAssignedOwner?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    isOnboarded?: SortOrder
    isVerified?: SortOrder
    isAssignedOwner?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestedRole?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestedRole?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestedRole?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewalDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewalDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    renewalDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumRoomTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeFilter<$PrismaModel> | $Enums.RoomType
  }

  export type EnumRoomForFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomFor | EnumRoomForFieldRefInput<$PrismaModel>
    in?: $Enums.RoomFor[] | ListEnumRoomForFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomFor[] | ListEnumRoomForFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomForFilter<$PrismaModel> | $Enums.RoomFor
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RoomBillingNullableScalarRelationFilter = {
    is?: RoomBillingWhereInput | null
    isNot?: RoomBillingWhereInput | null
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomStatus?: SortOrder
    province?: SortOrder
    location?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    roomNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roomImages?: SortOrder
    numberOfRooms?: SortOrder
    beds?: SortOrder
    toilet?: SortOrder
    clients?: SortOrder
    roomCapacity?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    dueAmount?: SortOrder
    clientInitationData?: SortOrder
    startedPriceFromDate?: SortOrder
    lastPayedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    province?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    roomNumber?: SortOrder
    numberOfRooms?: SortOrder
    beds?: SortOrder
    toilet?: SortOrder
    roomCapacity?: SortOrder
    dueAmount?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomStatus?: SortOrder
    province?: SortOrder
    location?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    roomNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    numberOfRooms?: SortOrder
    beds?: SortOrder
    toilet?: SortOrder
    roomCapacity?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    dueAmount?: SortOrder
    clientInitationData?: SortOrder
    startedPriceFromDate?: SortOrder
    lastPayedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomStatus?: SortOrder
    province?: SortOrder
    location?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    roomNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    numberOfRooms?: SortOrder
    beds?: SortOrder
    toilet?: SortOrder
    roomCapacity?: SortOrder
    roomType?: SortOrder
    roomFor?: SortOrder
    dueAmount?: SortOrder
    clientInitationData?: SortOrder
    startedPriceFromDate?: SortOrder
    lastPayedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    province?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    roomNumber?: SortOrder
    numberOfRooms?: SortOrder
    beds?: SortOrder
    toilet?: SortOrder
    roomCapacity?: SortOrder
    dueAmount?: SortOrder
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumRoomTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoomType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomTypeFilter<$PrismaModel>
    _max?: NestedEnumRoomTypeFilter<$PrismaModel>
  }

  export type EnumRoomForWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomFor | EnumRoomForFieldRefInput<$PrismaModel>
    in?: $Enums.RoomFor[] | ListEnumRoomForFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomFor[] | ListEnumRoomForFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomForWithAggregatesFilter<$PrismaModel> | $Enums.RoomFor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomForFilter<$PrismaModel>
    _max?: NestedEnumRoomForFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomBillingCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    water?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    roomCost?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomBillingAvgOrderByAggregateInput = {
    water?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    roomCost?: SortOrder
  }

  export type RoomBillingMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    water?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    roomCost?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomBillingMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    water?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    roomCost?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomBillingSumOrderByAggregateInput = {
    water?: SortOrder
    electricity?: SortOrder
    internet?: SortOrder
    roomCost?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type RoomPaymentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    payedBy?: SortOrder
    amountTotal?: SortOrder
    payedAmount?: SortOrder
    dueAmount?: SortOrder
    paymentStatus?: SortOrder
    dueMoneyReason?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomPaymentRecordAvgOrderByAggregateInput = {
    amountTotal?: SortOrder
    payedAmount?: SortOrder
    dueAmount?: SortOrder
  }

  export type RoomPaymentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    payedBy?: SortOrder
    amountTotal?: SortOrder
    payedAmount?: SortOrder
    dueAmount?: SortOrder
    paymentStatus?: SortOrder
    dueMoneyReason?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomPaymentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    roomId?: SortOrder
    payedBy?: SortOrder
    amountTotal?: SortOrder
    payedAmount?: SortOrder
    dueAmount?: SortOrder
    paymentStatus?: SortOrder
    dueMoneyReason?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomPaymentRecordSumOrderByAggregateInput = {
    amountTotal?: SortOrder
    payedAmount?: SortOrder
    dueAmount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PaymentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    payedBy?: SortOrder
    totalAmount?: SortOrder
    roomId?: SortOrder
    payedamount?: SortOrder
    dueAmount?: SortOrder
    startedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentHistoryAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    payedamount?: SortOrder
    dueAmount?: SortOrder
  }

  export type PaymentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    payedBy?: SortOrder
    totalAmount?: SortOrder
    roomId?: SortOrder
    payedamount?: SortOrder
    dueAmount?: SortOrder
    startedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    payedBy?: SortOrder
    totalAmount?: SortOrder
    roomId?: SortOrder
    payedamount?: SortOrder
    dueAmount?: SortOrder
    startedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentHistorySumOrderByAggregateInput = {
    totalAmount?: SortOrder
    payedamount?: SortOrder
    dueAmount?: SortOrder
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type SavedPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    savedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    savedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    savedDate?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostViewCountCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    viewDate?: SortOrder
  }

  export type PostViewCountMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    viewDate?: SortOrder
  }

  export type PostViewCountMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    viewDate?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRequestCreateWithoutUserInput, UserRequestUncheckedCreateWithoutUserInput> | UserRequestCreateWithoutUserInput[] | UserRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRequestCreateOrConnectWithoutUserInput | UserRequestCreateOrConnectWithoutUserInput[]
    createMany?: UserRequestCreateManyUserInputEnvelope
    connect?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
  }

  export type SubscriptionPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionPlanCreateWithoutUserInput, SubscriptionPlanUncheckedCreateWithoutUserInput> | SubscriptionPlanCreateWithoutUserInput[] | SubscriptionPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutUserInput | SubscriptionPlanCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionPlanCreateManyUserInputEnvelope
    connect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomBillingCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomBillingCreateWithoutOwnerInput, RoomBillingUncheckedCreateWithoutOwnerInput> | RoomBillingCreateWithoutOwnerInput[] | RoomBillingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomBillingCreateOrConnectWithoutOwnerInput | RoomBillingCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomBillingCreateManyOwnerInputEnvelope
    connect?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
  }

  export type PaymentHistoryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput> | PaymentHistoryCreateWithoutOwnerInput[] | PaymentHistoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutOwnerInput | PaymentHistoryCreateOrConnectWithoutOwnerInput[]
    createMany?: PaymentHistoryCreateManyOwnerInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type PaymentHistoryCreateNestedManyWithoutClientInput = {
    create?: XOR<PaymentHistoryCreateWithoutClientInput, PaymentHistoryUncheckedCreateWithoutClientInput> | PaymentHistoryCreateWithoutClientInput[] | PaymentHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutClientInput | PaymentHistoryCreateOrConnectWithoutClientInput[]
    createMany?: PaymentHistoryCreateManyClientInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type RoomPaymentRecordCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutOwnerInput, RoomPaymentRecordUncheckedCreateWithoutOwnerInput> | RoomPaymentRecordCreateWithoutOwnerInput[] | RoomPaymentRecordUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutOwnerInput | RoomPaymentRecordCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomPaymentRecordCreateManyOwnerInputEnvelope
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
  }

  export type RoomPaymentRecordCreateNestedManyWithoutClientInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutClientInput, RoomPaymentRecordUncheckedCreateWithoutClientInput> | RoomPaymentRecordCreateWithoutClientInput[] | RoomPaymentRecordUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutClientInput | RoomPaymentRecordCreateOrConnectWithoutClientInput[]
    createMany?: RoomPaymentRecordCreateManyClientInputEnvelope
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
  }

  export type PostsCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PostsCreateWithoutOwnerInput, PostsUncheckedCreateWithoutOwnerInput> | PostsCreateWithoutOwnerInput[] | PostsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutOwnerInput | PostsCreateOrConnectWithoutOwnerInput[]
    createMany?: PostsCreateManyOwnerInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type SavedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type PostViewCountCreateNestedManyWithoutUserInput = {
    create?: XOR<PostViewCountCreateWithoutUserInput, PostViewCountUncheckedCreateWithoutUserInput> | PostViewCountCreateWithoutUserInput[] | PostViewCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCountCreateOrConnectWithoutUserInput | PostViewCountCreateOrConnectWithoutUserInput[]
    createMany?: PostViewCountCreateManyUserInputEnvelope
    connect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRequestCreateWithoutUserInput, UserRequestUncheckedCreateWithoutUserInput> | UserRequestCreateWithoutUserInput[] | UserRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRequestCreateOrConnectWithoutUserInput | UserRequestCreateOrConnectWithoutUserInput[]
    createMany?: UserRequestCreateManyUserInputEnvelope
    connect?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
  }

  export type SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionPlanCreateWithoutUserInput, SubscriptionPlanUncheckedCreateWithoutUserInput> | SubscriptionPlanCreateWithoutUserInput[] | SubscriptionPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutUserInput | SubscriptionPlanCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionPlanCreateManyUserInputEnvelope
    connect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomBillingUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomBillingCreateWithoutOwnerInput, RoomBillingUncheckedCreateWithoutOwnerInput> | RoomBillingCreateWithoutOwnerInput[] | RoomBillingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomBillingCreateOrConnectWithoutOwnerInput | RoomBillingCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomBillingCreateManyOwnerInputEnvelope
    connect?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput> | PaymentHistoryCreateWithoutOwnerInput[] | PaymentHistoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutOwnerInput | PaymentHistoryCreateOrConnectWithoutOwnerInput[]
    createMany?: PaymentHistoryCreateManyOwnerInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PaymentHistoryCreateWithoutClientInput, PaymentHistoryUncheckedCreateWithoutClientInput> | PaymentHistoryCreateWithoutClientInput[] | PaymentHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutClientInput | PaymentHistoryCreateOrConnectWithoutClientInput[]
    createMany?: PaymentHistoryCreateManyClientInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutOwnerInput, RoomPaymentRecordUncheckedCreateWithoutOwnerInput> | RoomPaymentRecordCreateWithoutOwnerInput[] | RoomPaymentRecordUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutOwnerInput | RoomPaymentRecordCreateOrConnectWithoutOwnerInput[]
    createMany?: RoomPaymentRecordCreateManyOwnerInputEnvelope
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
  }

  export type RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutClientInput, RoomPaymentRecordUncheckedCreateWithoutClientInput> | RoomPaymentRecordCreateWithoutClientInput[] | RoomPaymentRecordUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutClientInput | RoomPaymentRecordCreateOrConnectWithoutClientInput[]
    createMany?: RoomPaymentRecordCreateManyClientInputEnvelope
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PostsCreateWithoutOwnerInput, PostsUncheckedCreateWithoutOwnerInput> | PostsCreateWithoutOwnerInput[] | PostsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutOwnerInput | PostsCreateOrConnectWithoutOwnerInput[]
    createMany?: PostsCreateManyOwnerInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type PostViewCountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostViewCountCreateWithoutUserInput, PostViewCountUncheckedCreateWithoutUserInput> | PostViewCountCreateWithoutUserInput[] | PostViewCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCountCreateOrConnectWithoutUserInput | PostViewCountCreateOrConnectWithoutUserInput[]
    createMany?: PostViewCountCreateManyUserInputEnvelope
    connect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRequestCreateWithoutUserInput, UserRequestUncheckedCreateWithoutUserInput> | UserRequestCreateWithoutUserInput[] | UserRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRequestCreateOrConnectWithoutUserInput | UserRequestCreateOrConnectWithoutUserInput[]
    upsert?: UserRequestUpsertWithWhereUniqueWithoutUserInput | UserRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRequestCreateManyUserInputEnvelope
    set?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
    disconnect?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
    delete?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
    connect?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
    update?: UserRequestUpdateWithWhereUniqueWithoutUserInput | UserRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRequestUpdateManyWithWhereWithoutUserInput | UserRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRequestScalarWhereInput | UserRequestScalarWhereInput[]
  }

  export type SubscriptionPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutUserInput, SubscriptionPlanUncheckedCreateWithoutUserInput> | SubscriptionPlanCreateWithoutUserInput[] | SubscriptionPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutUserInput | SubscriptionPlanCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionPlanUpsertWithWhereUniqueWithoutUserInput | SubscriptionPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionPlanCreateManyUserInputEnvelope
    set?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    disconnect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    delete?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    connect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    update?: SubscriptionPlanUpdateWithWhereUniqueWithoutUserInput | SubscriptionPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionPlanUpdateManyWithWhereWithoutUserInput | SubscriptionPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionPlanScalarWhereInput | SubscriptionPlanScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutOwnerInput | RoomUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutOwnerInput | RoomUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutOwnerInput | RoomUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomBillingUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomBillingCreateWithoutOwnerInput, RoomBillingUncheckedCreateWithoutOwnerInput> | RoomBillingCreateWithoutOwnerInput[] | RoomBillingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomBillingCreateOrConnectWithoutOwnerInput | RoomBillingCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomBillingUpsertWithWhereUniqueWithoutOwnerInput | RoomBillingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomBillingCreateManyOwnerInputEnvelope
    set?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
    disconnect?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
    delete?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
    connect?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
    update?: RoomBillingUpdateWithWhereUniqueWithoutOwnerInput | RoomBillingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomBillingUpdateManyWithWhereWithoutOwnerInput | RoomBillingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomBillingScalarWhereInput | RoomBillingScalarWhereInput[]
  }

  export type PaymentHistoryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput> | PaymentHistoryCreateWithoutOwnerInput[] | PaymentHistoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutOwnerInput | PaymentHistoryCreateOrConnectWithoutOwnerInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutOwnerInput | PaymentHistoryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PaymentHistoryCreateManyOwnerInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutOwnerInput | PaymentHistoryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutOwnerInput | PaymentHistoryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type PaymentHistoryUpdateManyWithoutClientNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutClientInput, PaymentHistoryUncheckedCreateWithoutClientInput> | PaymentHistoryCreateWithoutClientInput[] | PaymentHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutClientInput | PaymentHistoryCreateOrConnectWithoutClientInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutClientInput | PaymentHistoryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PaymentHistoryCreateManyClientInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutClientInput | PaymentHistoryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutClientInput | PaymentHistoryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type RoomPaymentRecordUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutOwnerInput, RoomPaymentRecordUncheckedCreateWithoutOwnerInput> | RoomPaymentRecordCreateWithoutOwnerInput[] | RoomPaymentRecordUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutOwnerInput | RoomPaymentRecordCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomPaymentRecordUpsertWithWhereUniqueWithoutOwnerInput | RoomPaymentRecordUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomPaymentRecordCreateManyOwnerInputEnvelope
    set?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    disconnect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    delete?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    update?: RoomPaymentRecordUpdateWithWhereUniqueWithoutOwnerInput | RoomPaymentRecordUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomPaymentRecordUpdateManyWithWhereWithoutOwnerInput | RoomPaymentRecordUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomPaymentRecordScalarWhereInput | RoomPaymentRecordScalarWhereInput[]
  }

  export type RoomPaymentRecordUpdateManyWithoutClientNestedInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutClientInput, RoomPaymentRecordUncheckedCreateWithoutClientInput> | RoomPaymentRecordCreateWithoutClientInput[] | RoomPaymentRecordUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutClientInput | RoomPaymentRecordCreateOrConnectWithoutClientInput[]
    upsert?: RoomPaymentRecordUpsertWithWhereUniqueWithoutClientInput | RoomPaymentRecordUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RoomPaymentRecordCreateManyClientInputEnvelope
    set?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    disconnect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    delete?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    update?: RoomPaymentRecordUpdateWithWhereUniqueWithoutClientInput | RoomPaymentRecordUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RoomPaymentRecordUpdateManyWithWhereWithoutClientInput | RoomPaymentRecordUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RoomPaymentRecordScalarWhereInput | RoomPaymentRecordScalarWhereInput[]
  }

  export type PostsUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PostsCreateWithoutOwnerInput, PostsUncheckedCreateWithoutOwnerInput> | PostsCreateWithoutOwnerInput[] | PostsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutOwnerInput | PostsCreateOrConnectWithoutOwnerInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutOwnerInput | PostsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PostsCreateManyOwnerInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutOwnerInput | PostsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutOwnerInput | PostsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type SavedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type PostViewCountUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostViewCountCreateWithoutUserInput, PostViewCountUncheckedCreateWithoutUserInput> | PostViewCountCreateWithoutUserInput[] | PostViewCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCountCreateOrConnectWithoutUserInput | PostViewCountCreateOrConnectWithoutUserInput[]
    upsert?: PostViewCountUpsertWithWhereUniqueWithoutUserInput | PostViewCountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostViewCountCreateManyUserInputEnvelope
    set?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    disconnect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    delete?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    connect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    update?: PostViewCountUpdateWithWhereUniqueWithoutUserInput | PostViewCountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostViewCountUpdateManyWithWhereWithoutUserInput | PostViewCountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostViewCountScalarWhereInput | PostViewCountScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRequestCreateWithoutUserInput, UserRequestUncheckedCreateWithoutUserInput> | UserRequestCreateWithoutUserInput[] | UserRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRequestCreateOrConnectWithoutUserInput | UserRequestCreateOrConnectWithoutUserInput[]
    upsert?: UserRequestUpsertWithWhereUniqueWithoutUserInput | UserRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRequestCreateManyUserInputEnvelope
    set?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
    disconnect?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
    delete?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
    connect?: UserRequestWhereUniqueInput | UserRequestWhereUniqueInput[]
    update?: UserRequestUpdateWithWhereUniqueWithoutUserInput | UserRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRequestUpdateManyWithWhereWithoutUserInput | UserRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRequestScalarWhereInput | UserRequestScalarWhereInput[]
  }

  export type SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutUserInput, SubscriptionPlanUncheckedCreateWithoutUserInput> | SubscriptionPlanCreateWithoutUserInput[] | SubscriptionPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutUserInput | SubscriptionPlanCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionPlanUpsertWithWhereUniqueWithoutUserInput | SubscriptionPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionPlanCreateManyUserInputEnvelope
    set?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    disconnect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    delete?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    connect?: SubscriptionPlanWhereUniqueInput | SubscriptionPlanWhereUniqueInput[]
    update?: SubscriptionPlanUpdateWithWhereUniqueWithoutUserInput | SubscriptionPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionPlanUpdateManyWithWhereWithoutUserInput | SubscriptionPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionPlanScalarWhereInput | SubscriptionPlanScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput> | RoomCreateWithoutOwnerInput[] | RoomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutOwnerInput | RoomCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutOwnerInput | RoomUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomCreateManyOwnerInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutOwnerInput | RoomUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutOwnerInput | RoomUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomBillingCreateWithoutOwnerInput, RoomBillingUncheckedCreateWithoutOwnerInput> | RoomBillingCreateWithoutOwnerInput[] | RoomBillingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomBillingCreateOrConnectWithoutOwnerInput | RoomBillingCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomBillingUpsertWithWhereUniqueWithoutOwnerInput | RoomBillingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomBillingCreateManyOwnerInputEnvelope
    set?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
    disconnect?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
    delete?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
    connect?: RoomBillingWhereUniqueInput | RoomBillingWhereUniqueInput[]
    update?: RoomBillingUpdateWithWhereUniqueWithoutOwnerInput | RoomBillingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomBillingUpdateManyWithWhereWithoutOwnerInput | RoomBillingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomBillingScalarWhereInput | RoomBillingScalarWhereInput[]
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput> | PaymentHistoryCreateWithoutOwnerInput[] | PaymentHistoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutOwnerInput | PaymentHistoryCreateOrConnectWithoutOwnerInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutOwnerInput | PaymentHistoryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PaymentHistoryCreateManyOwnerInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutOwnerInput | PaymentHistoryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutOwnerInput | PaymentHistoryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutClientInput, PaymentHistoryUncheckedCreateWithoutClientInput> | PaymentHistoryCreateWithoutClientInput[] | PaymentHistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutClientInput | PaymentHistoryCreateOrConnectWithoutClientInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutClientInput | PaymentHistoryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PaymentHistoryCreateManyClientInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutClientInput | PaymentHistoryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutClientInput | PaymentHistoryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutOwnerInput, RoomPaymentRecordUncheckedCreateWithoutOwnerInput> | RoomPaymentRecordCreateWithoutOwnerInput[] | RoomPaymentRecordUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutOwnerInput | RoomPaymentRecordCreateOrConnectWithoutOwnerInput[]
    upsert?: RoomPaymentRecordUpsertWithWhereUniqueWithoutOwnerInput | RoomPaymentRecordUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RoomPaymentRecordCreateManyOwnerInputEnvelope
    set?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    disconnect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    delete?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    update?: RoomPaymentRecordUpdateWithWhereUniqueWithoutOwnerInput | RoomPaymentRecordUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RoomPaymentRecordUpdateManyWithWhereWithoutOwnerInput | RoomPaymentRecordUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RoomPaymentRecordScalarWhereInput | RoomPaymentRecordScalarWhereInput[]
  }

  export type RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutClientInput, RoomPaymentRecordUncheckedCreateWithoutClientInput> | RoomPaymentRecordCreateWithoutClientInput[] | RoomPaymentRecordUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutClientInput | RoomPaymentRecordCreateOrConnectWithoutClientInput[]
    upsert?: RoomPaymentRecordUpsertWithWhereUniqueWithoutClientInput | RoomPaymentRecordUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RoomPaymentRecordCreateManyClientInputEnvelope
    set?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    disconnect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    delete?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    update?: RoomPaymentRecordUpdateWithWhereUniqueWithoutClientInput | RoomPaymentRecordUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RoomPaymentRecordUpdateManyWithWhereWithoutClientInput | RoomPaymentRecordUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RoomPaymentRecordScalarWhereInput | RoomPaymentRecordScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PostsCreateWithoutOwnerInput, PostsUncheckedCreateWithoutOwnerInput> | PostsCreateWithoutOwnerInput[] | PostsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutOwnerInput | PostsCreateOrConnectWithoutOwnerInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutOwnerInput | PostsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PostsCreateManyOwnerInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutOwnerInput | PostsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutOwnerInput | PostsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput> | SavedPostCreateWithoutUserInput[] | SavedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput | SavedPostCreateOrConnectWithoutUserInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput | SavedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedPostCreateManyUserInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutUserInput | SavedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput | SavedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type PostViewCountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostViewCountCreateWithoutUserInput, PostViewCountUncheckedCreateWithoutUserInput> | PostViewCountCreateWithoutUserInput[] | PostViewCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCountCreateOrConnectWithoutUserInput | PostViewCountCreateOrConnectWithoutUserInput[]
    upsert?: PostViewCountUpsertWithWhereUniqueWithoutUserInput | PostViewCountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostViewCountCreateManyUserInputEnvelope
    set?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    disconnect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    delete?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    connect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    update?: PostViewCountUpdateWithWhereUniqueWithoutUserInput | PostViewCountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostViewCountUpdateManyWithWhereWithoutUserInput | PostViewCountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostViewCountScalarWhereInput | PostViewCountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutUserRequestInput = {
    create?: XOR<UserCreateWithoutUserRequestInput, UserUncheckedCreateWithoutUserRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRequestInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRequestNestedInput = {
    create?: XOR<UserCreateWithoutUserRequestInput, UserUncheckedCreateWithoutUserRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRequestInput
    upsert?: UserUpsertWithoutUserRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRequestInput, UserUpdateWithoutUserRequestInput>, UserUncheckedUpdateWithoutUserRequestInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionPlanInput = {
    create?: XOR<UserCreateWithoutSubscriptionPlanInput, UserUncheckedCreateWithoutSubscriptionPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionPlanInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubscriptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionType
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UserUpdateOneRequiredWithoutSubscriptionPlanNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionPlanInput, UserUncheckedCreateWithoutSubscriptionPlanInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionPlanInput
    upsert?: UserUpsertWithoutSubscriptionPlanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionPlanInput, UserUpdateWithoutSubscriptionPlanInput>, UserUncheckedUpdateWithoutSubscriptionPlanInput>
  }

  export type RoomCreateroomImagesInput = {
    set: string[]
  }

  export type RoomCreateclientsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutRoomInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput
    connect?: UserWhereUniqueInput
  }

  export type RoomBillingCreateNestedOneWithoutRoomInput = {
    create?: XOR<RoomBillingCreateWithoutRoomInput, RoomBillingUncheckedCreateWithoutRoomInput>
    connectOrCreate?: RoomBillingCreateOrConnectWithoutRoomInput
    connect?: RoomBillingWhereUniqueInput
  }

  export type PaymentHistoryCreateNestedManyWithoutRoomInput = {
    create?: XOR<PaymentHistoryCreateWithoutRoomInput, PaymentHistoryUncheckedCreateWithoutRoomInput> | PaymentHistoryCreateWithoutRoomInput[] | PaymentHistoryUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutRoomInput | PaymentHistoryCreateOrConnectWithoutRoomInput[]
    createMany?: PaymentHistoryCreateManyRoomInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type RoomPaymentRecordCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutRoomInput, RoomPaymentRecordUncheckedCreateWithoutRoomInput> | RoomPaymentRecordCreateWithoutRoomInput[] | RoomPaymentRecordUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutRoomInput | RoomPaymentRecordCreateOrConnectWithoutRoomInput[]
    createMany?: RoomPaymentRecordCreateManyRoomInputEnvelope
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
  }

  export type PostsCreateNestedManyWithoutRoomInput = {
    create?: XOR<PostsCreateWithoutRoomInput, PostsUncheckedCreateWithoutRoomInput> | PostsCreateWithoutRoomInput[] | PostsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutRoomInput | PostsCreateOrConnectWithoutRoomInput[]
    createMany?: PostsCreateManyRoomInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type RoomBillingUncheckedCreateNestedOneWithoutRoomInput = {
    create?: XOR<RoomBillingCreateWithoutRoomInput, RoomBillingUncheckedCreateWithoutRoomInput>
    connectOrCreate?: RoomBillingCreateOrConnectWithoutRoomInput
    connect?: RoomBillingWhereUniqueInput
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<PaymentHistoryCreateWithoutRoomInput, PaymentHistoryUncheckedCreateWithoutRoomInput> | PaymentHistoryCreateWithoutRoomInput[] | PaymentHistoryUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutRoomInput | PaymentHistoryCreateOrConnectWithoutRoomInput[]
    createMany?: PaymentHistoryCreateManyRoomInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type RoomPaymentRecordUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutRoomInput, RoomPaymentRecordUncheckedCreateWithoutRoomInput> | RoomPaymentRecordCreateWithoutRoomInput[] | RoomPaymentRecordUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutRoomInput | RoomPaymentRecordCreateOrConnectWithoutRoomInput[]
    createMany?: RoomPaymentRecordCreateManyRoomInputEnvelope
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<PostsCreateWithoutRoomInput, PostsUncheckedCreateWithoutRoomInput> | PostsCreateWithoutRoomInput[] | PostsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutRoomInput | PostsCreateOrConnectWithoutRoomInput[]
    createMany?: PostsCreateManyRoomInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type RoomUpdateroomImagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RoomUpdateclientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumRoomTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoomType
  }

  export type EnumRoomForFieldUpdateOperationsInput = {
    set?: $Enums.RoomFor
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRoomNestedInput = {
    create?: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomInput
    upsert?: UserUpsertWithoutRoomInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomInput, UserUpdateWithoutRoomInput>, UserUncheckedUpdateWithoutRoomInput>
  }

  export type RoomBillingUpdateOneWithoutRoomNestedInput = {
    create?: XOR<RoomBillingCreateWithoutRoomInput, RoomBillingUncheckedCreateWithoutRoomInput>
    connectOrCreate?: RoomBillingCreateOrConnectWithoutRoomInput
    upsert?: RoomBillingUpsertWithoutRoomInput
    disconnect?: RoomBillingWhereInput | boolean
    delete?: RoomBillingWhereInput | boolean
    connect?: RoomBillingWhereUniqueInput
    update?: XOR<XOR<RoomBillingUpdateToOneWithWhereWithoutRoomInput, RoomBillingUpdateWithoutRoomInput>, RoomBillingUncheckedUpdateWithoutRoomInput>
  }

  export type PaymentHistoryUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutRoomInput, PaymentHistoryUncheckedCreateWithoutRoomInput> | PaymentHistoryCreateWithoutRoomInput[] | PaymentHistoryUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutRoomInput | PaymentHistoryCreateOrConnectWithoutRoomInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutRoomInput | PaymentHistoryUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PaymentHistoryCreateManyRoomInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutRoomInput | PaymentHistoryUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutRoomInput | PaymentHistoryUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type RoomPaymentRecordUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutRoomInput, RoomPaymentRecordUncheckedCreateWithoutRoomInput> | RoomPaymentRecordCreateWithoutRoomInput[] | RoomPaymentRecordUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutRoomInput | RoomPaymentRecordCreateOrConnectWithoutRoomInput[]
    upsert?: RoomPaymentRecordUpsertWithWhereUniqueWithoutRoomInput | RoomPaymentRecordUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomPaymentRecordCreateManyRoomInputEnvelope
    set?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    disconnect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    delete?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    update?: RoomPaymentRecordUpdateWithWhereUniqueWithoutRoomInput | RoomPaymentRecordUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomPaymentRecordUpdateManyWithWhereWithoutRoomInput | RoomPaymentRecordUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomPaymentRecordScalarWhereInput | RoomPaymentRecordScalarWhereInput[]
  }

  export type PostsUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PostsCreateWithoutRoomInput, PostsUncheckedCreateWithoutRoomInput> | PostsCreateWithoutRoomInput[] | PostsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutRoomInput | PostsCreateOrConnectWithoutRoomInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutRoomInput | PostsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PostsCreateManyRoomInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutRoomInput | PostsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutRoomInput | PostsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type RoomBillingUncheckedUpdateOneWithoutRoomNestedInput = {
    create?: XOR<RoomBillingCreateWithoutRoomInput, RoomBillingUncheckedCreateWithoutRoomInput>
    connectOrCreate?: RoomBillingCreateOrConnectWithoutRoomInput
    upsert?: RoomBillingUpsertWithoutRoomInput
    disconnect?: RoomBillingWhereInput | boolean
    delete?: RoomBillingWhereInput | boolean
    connect?: RoomBillingWhereUniqueInput
    update?: XOR<XOR<RoomBillingUpdateToOneWithWhereWithoutRoomInput, RoomBillingUpdateWithoutRoomInput>, RoomBillingUncheckedUpdateWithoutRoomInput>
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutRoomInput, PaymentHistoryUncheckedCreateWithoutRoomInput> | PaymentHistoryCreateWithoutRoomInput[] | PaymentHistoryUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutRoomInput | PaymentHistoryCreateOrConnectWithoutRoomInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutRoomInput | PaymentHistoryUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PaymentHistoryCreateManyRoomInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutRoomInput | PaymentHistoryUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutRoomInput | PaymentHistoryUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type RoomPaymentRecordUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomPaymentRecordCreateWithoutRoomInput, RoomPaymentRecordUncheckedCreateWithoutRoomInput> | RoomPaymentRecordCreateWithoutRoomInput[] | RoomPaymentRecordUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPaymentRecordCreateOrConnectWithoutRoomInput | RoomPaymentRecordCreateOrConnectWithoutRoomInput[]
    upsert?: RoomPaymentRecordUpsertWithWhereUniqueWithoutRoomInput | RoomPaymentRecordUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomPaymentRecordCreateManyRoomInputEnvelope
    set?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    disconnect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    delete?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    connect?: RoomPaymentRecordWhereUniqueInput | RoomPaymentRecordWhereUniqueInput[]
    update?: RoomPaymentRecordUpdateWithWhereUniqueWithoutRoomInput | RoomPaymentRecordUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomPaymentRecordUpdateManyWithWhereWithoutRoomInput | RoomPaymentRecordUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomPaymentRecordScalarWhereInput | RoomPaymentRecordScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PostsCreateWithoutRoomInput, PostsUncheckedCreateWithoutRoomInput> | PostsCreateWithoutRoomInput[] | PostsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutRoomInput | PostsCreateOrConnectWithoutRoomInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutRoomInput | PostsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PostsCreateManyRoomInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutRoomInput | PostsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutRoomInput | PostsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoomBillingInput = {
    create?: XOR<UserCreateWithoutRoomBillingInput, UserUncheckedCreateWithoutRoomBillingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomBillingInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutRoomBillingInput = {
    create?: XOR<RoomCreateWithoutRoomBillingInput, RoomUncheckedCreateWithoutRoomBillingInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomBillingInput
    connect?: RoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRoomBillingNestedInput = {
    create?: XOR<UserCreateWithoutRoomBillingInput, UserUncheckedCreateWithoutRoomBillingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomBillingInput
    upsert?: UserUpsertWithoutRoomBillingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomBillingInput, UserUpdateWithoutRoomBillingInput>, UserUncheckedUpdateWithoutRoomBillingInput>
  }

  export type RoomUpdateOneRequiredWithoutRoomBillingNestedInput = {
    create?: XOR<RoomCreateWithoutRoomBillingInput, RoomUncheckedCreateWithoutRoomBillingInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomBillingInput
    upsert?: RoomUpsertWithoutRoomBillingInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomBillingInput, RoomUpdateWithoutRoomBillingInput>, RoomUncheckedUpdateWithoutRoomBillingInput>
  }

  export type UserCreateNestedOneWithoutRoomPaymentRecordInput = {
    create?: XOR<UserCreateWithoutRoomPaymentRecordInput, UserUncheckedCreateWithoutRoomPaymentRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomPaymentRecordInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutRoomPaymentRecordInput = {
    create?: XOR<RoomCreateWithoutRoomPaymentRecordInput, RoomUncheckedCreateWithoutRoomPaymentRecordInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomPaymentRecordInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPayedByInput = {
    create?: XOR<UserCreateWithoutPayedByInput, UserUncheckedCreateWithoutPayedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayedByInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutRoomPaymentRecordNestedInput = {
    create?: XOR<UserCreateWithoutRoomPaymentRecordInput, UserUncheckedCreateWithoutRoomPaymentRecordInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomPaymentRecordInput
    upsert?: UserUpsertWithoutRoomPaymentRecordInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomPaymentRecordInput, UserUpdateWithoutRoomPaymentRecordInput>, UserUncheckedUpdateWithoutRoomPaymentRecordInput>
  }

  export type RoomUpdateOneRequiredWithoutRoomPaymentRecordNestedInput = {
    create?: XOR<RoomCreateWithoutRoomPaymentRecordInput, RoomUncheckedCreateWithoutRoomPaymentRecordInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomPaymentRecordInput
    upsert?: RoomUpsertWithoutRoomPaymentRecordInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomPaymentRecordInput, RoomUpdateWithoutRoomPaymentRecordInput>, RoomUncheckedUpdateWithoutRoomPaymentRecordInput>
  }

  export type UserUpdateOneRequiredWithoutPayedByNestedInput = {
    create?: XOR<UserCreateWithoutPayedByInput, UserUncheckedCreateWithoutPayedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayedByInput
    upsert?: UserUpsertWithoutPayedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayedByInput, UserUpdateWithoutPayedByInput>, UserUncheckedUpdateWithoutPayedByInput>
  }

  export type UserCreateNestedOneWithoutPaymentHistoryInput = {
    create?: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClientInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutRoomPaymentInput = {
    create?: XOR<RoomCreateWithoutRoomPaymentInput, RoomUncheckedCreateWithoutRoomPaymentInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomPaymentInput
    connect?: RoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentHistoryNestedInput = {
    create?: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentHistoryInput
    upsert?: UserUpsertWithoutPaymentHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentHistoryInput, UserUpdateWithoutPaymentHistoryInput>, UserUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientInput
    upsert?: UserUpsertWithoutClientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientInput, UserUpdateWithoutClientInput>, UserUncheckedUpdateWithoutClientInput>
  }

  export type RoomUpdateOneRequiredWithoutRoomPaymentNestedInput = {
    create?: XOR<RoomCreateWithoutRoomPaymentInput, RoomUncheckedCreateWithoutRoomPaymentInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRoomPaymentInput
    upsert?: RoomUpsertWithoutRoomPaymentInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRoomPaymentInput, RoomUpdateWithoutRoomPaymentInput>, RoomUncheckedUpdateWithoutRoomPaymentInput>
  }

  export type PostsCreateNestedOneWithoutSavedPostInput = {
    create?: XOR<PostsCreateWithoutSavedPostInput, PostsUncheckedCreateWithoutSavedPostInput>
    connectOrCreate?: PostsCreateOrConnectWithoutSavedPostInput
    connect?: PostsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSavedPostInput = {
    create?: XOR<UserCreateWithoutSavedPostInput, UserUncheckedCreateWithoutSavedPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostInput
    connect?: UserWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutSavedPostNestedInput = {
    create?: XOR<PostsCreateWithoutSavedPostInput, PostsUncheckedCreateWithoutSavedPostInput>
    connectOrCreate?: PostsCreateOrConnectWithoutSavedPostInput
    upsert?: PostsUpsertWithoutSavedPostInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutSavedPostInput, PostsUpdateWithoutSavedPostInput>, PostsUncheckedUpdateWithoutSavedPostInput>
  }

  export type UserUpdateOneRequiredWithoutSavedPostNestedInput = {
    create?: XOR<UserCreateWithoutSavedPostInput, UserUncheckedCreateWithoutSavedPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedPostInput
    upsert?: UserUpsertWithoutSavedPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedPostInput, UserUpdateWithoutSavedPostInput>, UserUncheckedUpdateWithoutSavedPostInput>
  }

  export type RoomCreateNestedOneWithoutPostsInput = {
    create?: XOR<RoomCreateWithoutPostsInput, RoomUncheckedCreateWithoutPostsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPostsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type SavedPostCreateNestedManyWithoutPostInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type PostViewCountCreateNestedManyWithoutPostInput = {
    create?: XOR<PostViewCountCreateWithoutPostInput, PostViewCountUncheckedCreateWithoutPostInput> | PostViewCountCreateWithoutPostInput[] | PostViewCountUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCountCreateOrConnectWithoutPostInput | PostViewCountCreateOrConnectWithoutPostInput[]
    createMany?: PostViewCountCreateManyPostInputEnvelope
    connect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
  }

  export type SavedPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
  }

  export type PostViewCountUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostViewCountCreateWithoutPostInput, PostViewCountUncheckedCreateWithoutPostInput> | PostViewCountCreateWithoutPostInput[] | PostViewCountUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCountCreateOrConnectWithoutPostInput | PostViewCountCreateOrConnectWithoutPostInput[]
    createMany?: PostViewCountCreateManyPostInputEnvelope
    connect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
  }

  export type RoomUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<RoomCreateWithoutPostsInput, RoomUncheckedCreateWithoutPostsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPostsInput
    upsert?: RoomUpsertWithoutPostsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutPostsInput, RoomUpdateWithoutPostsInput>, RoomUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type SavedPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput | SavedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostInput | SavedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput | SavedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type PostViewCountUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostViewCountCreateWithoutPostInput, PostViewCountUncheckedCreateWithoutPostInput> | PostViewCountCreateWithoutPostInput[] | PostViewCountUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCountCreateOrConnectWithoutPostInput | PostViewCountCreateOrConnectWithoutPostInput[]
    upsert?: PostViewCountUpsertWithWhereUniqueWithoutPostInput | PostViewCountUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostViewCountCreateManyPostInputEnvelope
    set?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    disconnect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    delete?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    connect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    update?: PostViewCountUpdateWithWhereUniqueWithoutPostInput | PostViewCountUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostViewCountUpdateManyWithWhereWithoutPostInput | PostViewCountUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostViewCountScalarWhereInput | PostViewCountScalarWhereInput[]
  }

  export type SavedPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput> | SavedPostCreateWithoutPostInput[] | SavedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput | SavedPostCreateOrConnectWithoutPostInput[]
    upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput | SavedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SavedPostCreateManyPostInputEnvelope
    set?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    disconnect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    delete?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    connect?: SavedPostWhereUniqueInput | SavedPostWhereUniqueInput[]
    update?: SavedPostUpdateWithWhereUniqueWithoutPostInput | SavedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput | SavedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
  }

  export type PostViewCountUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostViewCountCreateWithoutPostInput, PostViewCountUncheckedCreateWithoutPostInput> | PostViewCountCreateWithoutPostInput[] | PostViewCountUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCountCreateOrConnectWithoutPostInput | PostViewCountCreateOrConnectWithoutPostInput[]
    upsert?: PostViewCountUpsertWithWhereUniqueWithoutPostInput | PostViewCountUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostViewCountCreateManyPostInputEnvelope
    set?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    disconnect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    delete?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    connect?: PostViewCountWhereUniqueInput | PostViewCountWhereUniqueInput[]
    update?: PostViewCountUpdateWithWhereUniqueWithoutPostInput | PostViewCountUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostViewCountUpdateManyWithWhereWithoutPostInput | PostViewCountUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostViewCountScalarWhereInput | PostViewCountScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutTotalCountInput = {
    create?: XOR<PostsCreateWithoutTotalCountInput, PostsUncheckedCreateWithoutTotalCountInput>
    connectOrCreate?: PostsCreateOrConnectWithoutTotalCountInput
    connect?: PostsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostViewCountInput = {
    create?: XOR<UserCreateWithoutPostViewCountInput, UserUncheckedCreateWithoutPostViewCountInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostViewCountInput
    connect?: UserWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutTotalCountNestedInput = {
    create?: XOR<PostsCreateWithoutTotalCountInput, PostsUncheckedCreateWithoutTotalCountInput>
    connectOrCreate?: PostsCreateOrConnectWithoutTotalCountInput
    upsert?: PostsUpsertWithoutTotalCountInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutTotalCountInput, PostsUpdateWithoutTotalCountInput>, PostsUncheckedUpdateWithoutTotalCountInput>
  }

  export type UserUpdateOneRequiredWithoutPostViewCountNestedInput = {
    create?: XOR<UserCreateWithoutPostViewCountInput, UserUncheckedCreateWithoutPostViewCountInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostViewCountInput
    upsert?: UserUpsertWithoutPostViewCountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostViewCountInput, UserUpdateWithoutPostViewCountInput>, UserUncheckedUpdateWithoutPostViewCountInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumSubscriptionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeFilter<$PrismaModel> | $Enums.SubscriptionType
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionType | EnumSubscriptionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionType[] | ListEnumSubscriptionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTypeFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeFilter<$PrismaModel> | $Enums.RoomType
  }

  export type NestedEnumRoomForFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomFor | EnumRoomForFieldRefInput<$PrismaModel>
    in?: $Enums.RoomFor[] | ListEnumRoomForFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomFor[] | ListEnumRoomForFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomForFilter<$PrismaModel> | $Enums.RoomFor
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoomType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomTypeFilter<$PrismaModel>
    _max?: NestedEnumRoomTypeFilter<$PrismaModel>
  }

  export type NestedEnumRoomForWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomFor | EnumRoomForFieldRefInput<$PrismaModel>
    in?: $Enums.RoomFor[] | ListEnumRoomForFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomFor[] | ListEnumRoomForFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomForWithAggregatesFilter<$PrismaModel> | $Enums.RoomFor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomForFilter<$PrismaModel>
    _max?: NestedEnumRoomForFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type UserRequestCreateWithoutUserInput = {
    id?: string
    requestedRole: $Enums.UserRole
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserRequestUncheckedCreateWithoutUserInput = {
    id?: string
    requestedRole: $Enums.UserRole
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserRequestCreateOrConnectWithoutUserInput = {
    where: UserRequestWhereUniqueInput
    create: XOR<UserRequestCreateWithoutUserInput, UserRequestUncheckedCreateWithoutUserInput>
  }

  export type UserRequestCreateManyUserInputEnvelope = {
    data: UserRequestCreateManyUserInput | UserRequestCreateManyUserInput[]
  }

  export type SubscriptionPlanCreateWithoutUserInput = {
    id?: string
    type?: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate?: Date | string | null
    renewalDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUncheckedCreateWithoutUserInput = {
    id?: string
    type?: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate?: Date | string | null
    renewalDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanCreateOrConnectWithoutUserInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutUserInput, SubscriptionPlanUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionPlanCreateManyUserInputEnvelope = {
    data: SubscriptionPlanCreateManyUserInput | SubscriptionPlanCreateManyUserInput[]
  }

  export type RoomCreateWithoutOwnerInput = {
    id?: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    roomBilling?: RoomBillingCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryCreateNestedManyWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutRoomInput
    posts?: PostsCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutOwnerInput = {
    id?: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    roomBilling?: RoomBillingUncheckedCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryUncheckedCreateNestedManyWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutRoomInput
    posts?: PostsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
  }

  export type RoomCreateManyOwnerInputEnvelope = {
    data: RoomCreateManyOwnerInput | RoomCreateManyOwnerInput[]
  }

  export type RoomBillingCreateWithoutOwnerInput = {
    id?: string
    water?: number
    electricity?: number
    internet?: number
    roomCost?: number
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomBillingInput
  }

  export type RoomBillingUncheckedCreateWithoutOwnerInput = {
    id?: string
    roomId: string
    water?: number
    electricity?: number
    internet?: number
    roomCost?: number
    createdAt?: Date | string
  }

  export type RoomBillingCreateOrConnectWithoutOwnerInput = {
    where: RoomBillingWhereUniqueInput
    create: XOR<RoomBillingCreateWithoutOwnerInput, RoomBillingUncheckedCreateWithoutOwnerInput>
  }

  export type RoomBillingCreateManyOwnerInputEnvelope = {
    data: RoomBillingCreateManyOwnerInput | RoomBillingCreateManyOwnerInput[]
  }

  export type PaymentHistoryCreateWithoutOwnerInput = {
    id?: string
    totalAmount: number
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
    client: UserCreateNestedOneWithoutClientInput
    room: RoomCreateNestedOneWithoutRoomPaymentInput
  }

  export type PaymentHistoryUncheckedCreateWithoutOwnerInput = {
    id?: string
    payedBy: string
    totalAmount: number
    roomId: string
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
  }

  export type PaymentHistoryCreateOrConnectWithoutOwnerInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput>
  }

  export type PaymentHistoryCreateManyOwnerInputEnvelope = {
    data: PaymentHistoryCreateManyOwnerInput | PaymentHistoryCreateManyOwnerInput[]
  }

  export type PaymentHistoryCreateWithoutClientInput = {
    id?: string
    totalAmount: number
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPaymentHistoryInput
    room: RoomCreateNestedOneWithoutRoomPaymentInput
  }

  export type PaymentHistoryUncheckedCreateWithoutClientInput = {
    id?: string
    ownerId: string
    totalAmount: number
    roomId: string
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
  }

  export type PaymentHistoryCreateOrConnectWithoutClientInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutClientInput, PaymentHistoryUncheckedCreateWithoutClientInput>
  }

  export type PaymentHistoryCreateManyClientInputEnvelope = {
    data: PaymentHistoryCreateManyClientInput | PaymentHistoryCreateManyClientInput[]
  }

  export type RoomPaymentRecordCreateWithoutOwnerInput = {
    id?: string
    description: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutRoomPaymentRecordInput
    client: UserCreateNestedOneWithoutPayedByInput
  }

  export type RoomPaymentRecordUncheckedCreateWithoutOwnerInput = {
    id?: string
    description: string
    roomId: string
    payedBy: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
  }

  export type RoomPaymentRecordCreateOrConnectWithoutOwnerInput = {
    where: RoomPaymentRecordWhereUniqueInput
    create: XOR<RoomPaymentRecordCreateWithoutOwnerInput, RoomPaymentRecordUncheckedCreateWithoutOwnerInput>
  }

  export type RoomPaymentRecordCreateManyOwnerInputEnvelope = {
    data: RoomPaymentRecordCreateManyOwnerInput | RoomPaymentRecordCreateManyOwnerInput[]
  }

  export type RoomPaymentRecordCreateWithoutClientInput = {
    id?: string
    description: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomPaymentRecordInput
    room: RoomCreateNestedOneWithoutRoomPaymentRecordInput
  }

  export type RoomPaymentRecordUncheckedCreateWithoutClientInput = {
    id?: string
    description: string
    ownerId: string
    roomId: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
  }

  export type RoomPaymentRecordCreateOrConnectWithoutClientInput = {
    where: RoomPaymentRecordWhereUniqueInput
    create: XOR<RoomPaymentRecordCreateWithoutClientInput, RoomPaymentRecordUncheckedCreateWithoutClientInput>
  }

  export type RoomPaymentRecordCreateManyClientInputEnvelope = {
    data: RoomPaymentRecordCreateManyClientInput | RoomPaymentRecordCreateManyClientInput[]
  }

  export type PostsCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutPostsInput
    savedPost?: SavedPostCreateNestedManyWithoutPostInput
    totalCount?: PostViewCountCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutOwnerInput = {
    id?: string
    roomId: string
    createdAt?: Date | string
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutPostInput
    totalCount?: PostViewCountUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutOwnerInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutOwnerInput, PostsUncheckedCreateWithoutOwnerInput>
  }

  export type PostsCreateManyOwnerInputEnvelope = {
    data: PostsCreateManyOwnerInput | PostsCreateManyOwnerInput[]
  }

  export type SavedPostCreateWithoutUserInput = {
    id?: string
    savedDate?: Date | string
    createdAt?: Date | string
    post: PostsCreateNestedOneWithoutSavedPostInput
  }

  export type SavedPostUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    savedDate?: Date | string
    createdAt?: Date | string
  }

  export type SavedPostCreateOrConnectWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostCreateManyUserInputEnvelope = {
    data: SavedPostCreateManyUserInput | SavedPostCreateManyUserInput[]
  }

  export type PostViewCountCreateWithoutUserInput = {
    id?: string
    viewDate?: Date | string
    post: PostsCreateNestedOneWithoutTotalCountInput
  }

  export type PostViewCountUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    viewDate?: Date | string
  }

  export type PostViewCountCreateOrConnectWithoutUserInput = {
    where: PostViewCountWhereUniqueInput
    create: XOR<PostViewCountCreateWithoutUserInput, PostViewCountUncheckedCreateWithoutUserInput>
  }

  export type PostViewCountCreateManyUserInputEnvelope = {
    data: PostViewCountCreateManyUserInput | PostViewCountCreateManyUserInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRequestWhereUniqueInput
    update: XOR<UserRequestUpdateWithoutUserInput, UserRequestUncheckedUpdateWithoutUserInput>
    create: XOR<UserRequestCreateWithoutUserInput, UserRequestUncheckedCreateWithoutUserInput>
  }

  export type UserRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRequestWhereUniqueInput
    data: XOR<UserRequestUpdateWithoutUserInput, UserRequestUncheckedUpdateWithoutUserInput>
  }

  export type UserRequestUpdateManyWithWhereWithoutUserInput = {
    where: UserRequestScalarWhereInput
    data: XOR<UserRequestUpdateManyMutationInput, UserRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRequestScalarWhereInput = {
    AND?: UserRequestScalarWhereInput | UserRequestScalarWhereInput[]
    OR?: UserRequestScalarWhereInput[]
    NOT?: UserRequestScalarWhereInput | UserRequestScalarWhereInput[]
    id?: StringFilter<"UserRequest"> | string
    userId?: StringFilter<"UserRequest"> | string
    requestedRole?: EnumUserRoleFilter<"UserRequest"> | $Enums.UserRole
    updatedAt?: DateTimeFilter<"UserRequest"> | Date | string
    createdAt?: DateTimeFilter<"UserRequest"> | Date | string
  }

  export type SubscriptionPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionPlanWhereUniqueInput
    update: XOR<SubscriptionPlanUpdateWithoutUserInput, SubscriptionPlanUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionPlanCreateWithoutUserInput, SubscriptionPlanUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionPlanWhereUniqueInput
    data: XOR<SubscriptionPlanUpdateWithoutUserInput, SubscriptionPlanUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionPlanUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionPlanScalarWhereInput
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionPlanScalarWhereInput = {
    AND?: SubscriptionPlanScalarWhereInput | SubscriptionPlanScalarWhereInput[]
    OR?: SubscriptionPlanScalarWhereInput[]
    NOT?: SubscriptionPlanScalarWhereInput | SubscriptionPlanScalarWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    userId?: StringFilter<"SubscriptionPlan"> | string
    type?: EnumSubscriptionTypeFilter<"SubscriptionPlan"> | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFilter<"SubscriptionPlan"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    endDate?: DateTimeNullableFilter<"SubscriptionPlan"> | Date | string | null
    renewalDate?: DateTimeNullableFilter<"SubscriptionPlan"> | Date | string | null
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutOwnerInput, RoomUncheckedUpdateWithoutOwnerInput>
    create: XOR<RoomCreateWithoutOwnerInput, RoomUncheckedCreateWithoutOwnerInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutOwnerInput, RoomUncheckedUpdateWithoutOwnerInput>
  }

  export type RoomUpdateManyWithWhereWithoutOwnerInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    ownerId?: StringFilter<"Room"> | string
    roomStatus?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    province?: IntFilter<"Room"> | number
    location?: StringFilter<"Room"> | string
    lon?: FloatNullableFilter<"Room"> | number | null
    lat?: FloatNullableFilter<"Room"> | number | null
    roomNumber?: IntFilter<"Room"> | number
    title?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    roomImages?: StringNullableListFilter<"Room">
    numberOfRooms?: IntFilter<"Room"> | number
    beds?: IntFilter<"Room"> | number
    toilet?: IntFilter<"Room"> | number
    clients?: StringNullableListFilter<"Room">
    roomCapacity?: IntFilter<"Room"> | number
    roomType?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    roomFor?: EnumRoomForFilter<"Room"> | $Enums.RoomFor
    dueAmount?: FloatFilter<"Room"> | number
    clientInitationData?: DateTimeNullableFilter<"Room"> | Date | string | null
    startedPriceFromDate?: DateTimeNullableFilter<"Room"> | Date | string | null
    lastPayedDate?: DateTimeNullableFilter<"Room"> | Date | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type RoomBillingUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RoomBillingWhereUniqueInput
    update: XOR<RoomBillingUpdateWithoutOwnerInput, RoomBillingUncheckedUpdateWithoutOwnerInput>
    create: XOR<RoomBillingCreateWithoutOwnerInput, RoomBillingUncheckedCreateWithoutOwnerInput>
  }

  export type RoomBillingUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RoomBillingWhereUniqueInput
    data: XOR<RoomBillingUpdateWithoutOwnerInput, RoomBillingUncheckedUpdateWithoutOwnerInput>
  }

  export type RoomBillingUpdateManyWithWhereWithoutOwnerInput = {
    where: RoomBillingScalarWhereInput
    data: XOR<RoomBillingUpdateManyMutationInput, RoomBillingUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RoomBillingScalarWhereInput = {
    AND?: RoomBillingScalarWhereInput | RoomBillingScalarWhereInput[]
    OR?: RoomBillingScalarWhereInput[]
    NOT?: RoomBillingScalarWhereInput | RoomBillingScalarWhereInput[]
    id?: StringFilter<"RoomBilling"> | string
    ownerId?: StringFilter<"RoomBilling"> | string
    roomId?: StringFilter<"RoomBilling"> | string
    water?: FloatFilter<"RoomBilling"> | number
    electricity?: FloatFilter<"RoomBilling"> | number
    internet?: FloatFilter<"RoomBilling"> | number
    roomCost?: FloatFilter<"RoomBilling"> | number
    createdAt?: DateTimeFilter<"RoomBilling"> | Date | string
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutOwnerInput, PaymentHistoryUncheckedUpdateWithoutOwnerInput>
    create: XOR<PaymentHistoryCreateWithoutOwnerInput, PaymentHistoryUncheckedCreateWithoutOwnerInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutOwnerInput, PaymentHistoryUncheckedUpdateWithoutOwnerInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutOwnerInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PaymentHistoryScalarWhereInput = {
    AND?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    OR?: PaymentHistoryScalarWhereInput[]
    NOT?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    id?: StringFilter<"PaymentHistory"> | string
    ownerId?: StringFilter<"PaymentHistory"> | string
    payedBy?: StringFilter<"PaymentHistory"> | string
    totalAmount?: FloatFilter<"PaymentHistory"> | number
    roomId?: StringFilter<"PaymentHistory"> | string
    payedamount?: FloatFilter<"PaymentHistory"> | number
    dueAmount?: FloatFilter<"PaymentHistory"> | number
    startedDate?: DateTimeFilter<"PaymentHistory"> | Date | string
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutClientInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutClientInput, PaymentHistoryUncheckedUpdateWithoutClientInput>
    create: XOR<PaymentHistoryCreateWithoutClientInput, PaymentHistoryUncheckedCreateWithoutClientInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutClientInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutClientInput, PaymentHistoryUncheckedUpdateWithoutClientInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutClientInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutClientInput>
  }

  export type RoomPaymentRecordUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RoomPaymentRecordWhereUniqueInput
    update: XOR<RoomPaymentRecordUpdateWithoutOwnerInput, RoomPaymentRecordUncheckedUpdateWithoutOwnerInput>
    create: XOR<RoomPaymentRecordCreateWithoutOwnerInput, RoomPaymentRecordUncheckedCreateWithoutOwnerInput>
  }

  export type RoomPaymentRecordUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RoomPaymentRecordWhereUniqueInput
    data: XOR<RoomPaymentRecordUpdateWithoutOwnerInput, RoomPaymentRecordUncheckedUpdateWithoutOwnerInput>
  }

  export type RoomPaymentRecordUpdateManyWithWhereWithoutOwnerInput = {
    where: RoomPaymentRecordScalarWhereInput
    data: XOR<RoomPaymentRecordUpdateManyMutationInput, RoomPaymentRecordUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RoomPaymentRecordScalarWhereInput = {
    AND?: RoomPaymentRecordScalarWhereInput | RoomPaymentRecordScalarWhereInput[]
    OR?: RoomPaymentRecordScalarWhereInput[]
    NOT?: RoomPaymentRecordScalarWhereInput | RoomPaymentRecordScalarWhereInput[]
    id?: StringFilter<"RoomPaymentRecord"> | string
    description?: StringFilter<"RoomPaymentRecord"> | string
    ownerId?: StringFilter<"RoomPaymentRecord"> | string
    roomId?: StringFilter<"RoomPaymentRecord"> | string
    payedBy?: StringFilter<"RoomPaymentRecord"> | string
    amountTotal?: FloatFilter<"RoomPaymentRecord"> | number
    payedAmount?: FloatFilter<"RoomPaymentRecord"> | number
    dueAmount?: FloatFilter<"RoomPaymentRecord"> | number
    paymentStatus?: EnumPaymentStatusFilter<"RoomPaymentRecord"> | $Enums.PaymentStatus
    dueMoneyReason?: StringNullableFilter<"RoomPaymentRecord"> | string | null
    createdAt?: DateTimeFilter<"RoomPaymentRecord"> | Date | string
  }

  export type RoomPaymentRecordUpsertWithWhereUniqueWithoutClientInput = {
    where: RoomPaymentRecordWhereUniqueInput
    update: XOR<RoomPaymentRecordUpdateWithoutClientInput, RoomPaymentRecordUncheckedUpdateWithoutClientInput>
    create: XOR<RoomPaymentRecordCreateWithoutClientInput, RoomPaymentRecordUncheckedCreateWithoutClientInput>
  }

  export type RoomPaymentRecordUpdateWithWhereUniqueWithoutClientInput = {
    where: RoomPaymentRecordWhereUniqueInput
    data: XOR<RoomPaymentRecordUpdateWithoutClientInput, RoomPaymentRecordUncheckedUpdateWithoutClientInput>
  }

  export type RoomPaymentRecordUpdateManyWithWhereWithoutClientInput = {
    where: RoomPaymentRecordScalarWhereInput
    data: XOR<RoomPaymentRecordUpdateManyMutationInput, RoomPaymentRecordUncheckedUpdateManyWithoutClientInput>
  }

  export type PostsUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutOwnerInput, PostsUncheckedUpdateWithoutOwnerInput>
    create: XOR<PostsCreateWithoutOwnerInput, PostsUncheckedCreateWithoutOwnerInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutOwnerInput, PostsUncheckedUpdateWithoutOwnerInput>
  }

  export type PostsUpdateManyWithWhereWithoutOwnerInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: StringFilter<"Posts"> | string
    roomId?: StringFilter<"Posts"> | string
    ownerId?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
  }

  export type SavedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
    create: XOR<SavedPostCreateWithoutUserInput, SavedPostUncheckedCreateWithoutUserInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutUserInput, SavedPostUncheckedUpdateWithoutUserInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutUserInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedPostScalarWhereInput = {
    AND?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    OR?: SavedPostScalarWhereInput[]
    NOT?: SavedPostScalarWhereInput | SavedPostScalarWhereInput[]
    id?: StringFilter<"SavedPost"> | string
    postId?: StringFilter<"SavedPost"> | string
    userId?: StringFilter<"SavedPost"> | string
    savedDate?: DateTimeFilter<"SavedPost"> | Date | string
    createdAt?: DateTimeFilter<"SavedPost"> | Date | string
  }

  export type PostViewCountUpsertWithWhereUniqueWithoutUserInput = {
    where: PostViewCountWhereUniqueInput
    update: XOR<PostViewCountUpdateWithoutUserInput, PostViewCountUncheckedUpdateWithoutUserInput>
    create: XOR<PostViewCountCreateWithoutUserInput, PostViewCountUncheckedCreateWithoutUserInput>
  }

  export type PostViewCountUpdateWithWhereUniqueWithoutUserInput = {
    where: PostViewCountWhereUniqueInput
    data: XOR<PostViewCountUpdateWithoutUserInput, PostViewCountUncheckedUpdateWithoutUserInput>
  }

  export type PostViewCountUpdateManyWithWhereWithoutUserInput = {
    where: PostViewCountScalarWhereInput
    data: XOR<PostViewCountUpdateManyMutationInput, PostViewCountUncheckedUpdateManyWithoutUserInput>
  }

  export type PostViewCountScalarWhereInput = {
    AND?: PostViewCountScalarWhereInput | PostViewCountScalarWhereInput[]
    OR?: PostViewCountScalarWhereInput[]
    NOT?: PostViewCountScalarWhereInput | PostViewCountScalarWhereInput[]
    id?: StringFilter<"PostViewCount"> | string
    postId?: StringFilter<"PostViewCount"> | string
    userId?: StringFilter<"PostViewCount"> | string
    viewDate?: DateTimeFilter<"PostViewCount"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserRequestInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRequestInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRequestInput, UserUncheckedCreateWithoutUserRequestInput>
  }

  export type UserUpsertWithoutUserRequestInput = {
    update: XOR<UserUpdateWithoutUserRequestInput, UserUncheckedUpdateWithoutUserRequestInput>
    create: XOR<UserCreateWithoutUserRequestInput, UserUncheckedCreateWithoutUserRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRequestInput, UserUncheckedUpdateWithoutUserRequestInput>
  }

  export type UserUpdateWithoutUserRequestInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRequestInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionPlanInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionPlanInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionPlanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionPlanInput, UserUncheckedCreateWithoutSubscriptionPlanInput>
  }

  export type UserUpsertWithoutSubscriptionPlanInput = {
    update: XOR<UserUpdateWithoutSubscriptionPlanInput, UserUncheckedUpdateWithoutSubscriptionPlanInput>
    create: XOR<UserCreateWithoutSubscriptionPlanInput, UserUncheckedCreateWithoutSubscriptionPlanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionPlanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionPlanInput, UserUncheckedUpdateWithoutSubscriptionPlanInput>
  }

  export type UserUpdateWithoutSubscriptionPlanInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionPlanInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRoomInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
  }

  export type RoomBillingCreateWithoutRoomInput = {
    id?: string
    water?: number
    electricity?: number
    internet?: number
    roomCost?: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomBillingInput
  }

  export type RoomBillingUncheckedCreateWithoutRoomInput = {
    id?: string
    ownerId: string
    water?: number
    electricity?: number
    internet?: number
    roomCost?: number
    createdAt?: Date | string
  }

  export type RoomBillingCreateOrConnectWithoutRoomInput = {
    where: RoomBillingWhereUniqueInput
    create: XOR<RoomBillingCreateWithoutRoomInput, RoomBillingUncheckedCreateWithoutRoomInput>
  }

  export type PaymentHistoryCreateWithoutRoomInput = {
    id?: string
    totalAmount: number
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPaymentHistoryInput
    client: UserCreateNestedOneWithoutClientInput
  }

  export type PaymentHistoryUncheckedCreateWithoutRoomInput = {
    id?: string
    ownerId: string
    payedBy: string
    totalAmount: number
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
  }

  export type PaymentHistoryCreateOrConnectWithoutRoomInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutRoomInput, PaymentHistoryUncheckedCreateWithoutRoomInput>
  }

  export type PaymentHistoryCreateManyRoomInputEnvelope = {
    data: PaymentHistoryCreateManyRoomInput | PaymentHistoryCreateManyRoomInput[]
  }

  export type RoomPaymentRecordCreateWithoutRoomInput = {
    id?: string
    description: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomPaymentRecordInput
    client: UserCreateNestedOneWithoutPayedByInput
  }

  export type RoomPaymentRecordUncheckedCreateWithoutRoomInput = {
    id?: string
    description: string
    ownerId: string
    payedBy: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
  }

  export type RoomPaymentRecordCreateOrConnectWithoutRoomInput = {
    where: RoomPaymentRecordWhereUniqueInput
    create: XOR<RoomPaymentRecordCreateWithoutRoomInput, RoomPaymentRecordUncheckedCreateWithoutRoomInput>
  }

  export type RoomPaymentRecordCreateManyRoomInputEnvelope = {
    data: RoomPaymentRecordCreateManyRoomInput | RoomPaymentRecordCreateManyRoomInput[]
  }

  export type PostsCreateWithoutRoomInput = {
    id?: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPostsInput
    savedPost?: SavedPostCreateNestedManyWithoutPostInput
    totalCount?: PostViewCountCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutRoomInput = {
    id?: string
    ownerId: string
    createdAt?: Date | string
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutPostInput
    totalCount?: PostViewCountUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutRoomInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutRoomInput, PostsUncheckedCreateWithoutRoomInput>
  }

  export type PostsCreateManyRoomInputEnvelope = {
    data: PostsCreateManyRoomInput | PostsCreateManyRoomInput[]
  }

  export type UserUpsertWithoutRoomInput = {
    update: XOR<UserUpdateWithoutRoomInput, UserUncheckedUpdateWithoutRoomInput>
    create: XOR<UserCreateWithoutRoomInput, UserUncheckedCreateWithoutRoomInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomInput, UserUncheckedUpdateWithoutRoomInput>
  }

  export type UserUpdateWithoutRoomInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomBillingUpsertWithoutRoomInput = {
    update: XOR<RoomBillingUpdateWithoutRoomInput, RoomBillingUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomBillingCreateWithoutRoomInput, RoomBillingUncheckedCreateWithoutRoomInput>
    where?: RoomBillingWhereInput
  }

  export type RoomBillingUpdateToOneWithWhereWithoutRoomInput = {
    where?: RoomBillingWhereInput
    data: XOR<RoomBillingUpdateWithoutRoomInput, RoomBillingUncheckedUpdateWithoutRoomInput>
  }

  export type RoomBillingUpdateWithoutRoomInput = {
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomBillingNestedInput
  }

  export type RoomBillingUncheckedUpdateWithoutRoomInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutRoomInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutRoomInput, PaymentHistoryUncheckedUpdateWithoutRoomInput>
    create: XOR<PaymentHistoryCreateWithoutRoomInput, PaymentHistoryUncheckedCreateWithoutRoomInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutRoomInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutRoomInput, PaymentHistoryUncheckedUpdateWithoutRoomInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutRoomInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomPaymentRecordUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomPaymentRecordWhereUniqueInput
    update: XOR<RoomPaymentRecordUpdateWithoutRoomInput, RoomPaymentRecordUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomPaymentRecordCreateWithoutRoomInput, RoomPaymentRecordUncheckedCreateWithoutRoomInput>
  }

  export type RoomPaymentRecordUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomPaymentRecordWhereUniqueInput
    data: XOR<RoomPaymentRecordUpdateWithoutRoomInput, RoomPaymentRecordUncheckedUpdateWithoutRoomInput>
  }

  export type RoomPaymentRecordUpdateManyWithWhereWithoutRoomInput = {
    where: RoomPaymentRecordScalarWhereInput
    data: XOR<RoomPaymentRecordUpdateManyMutationInput, RoomPaymentRecordUncheckedUpdateManyWithoutRoomInput>
  }

  export type PostsUpsertWithWhereUniqueWithoutRoomInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutRoomInput, PostsUncheckedUpdateWithoutRoomInput>
    create: XOR<PostsCreateWithoutRoomInput, PostsUncheckedCreateWithoutRoomInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutRoomInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutRoomInput, PostsUncheckedUpdateWithoutRoomInput>
  }

  export type PostsUpdateManyWithWhereWithoutRoomInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutRoomBillingInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomBillingInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomBillingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomBillingInput, UserUncheckedCreateWithoutRoomBillingInput>
  }

  export type RoomCreateWithoutRoomBillingInput = {
    id?: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryCreateNestedManyWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutRoomInput
    posts?: PostsCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomBillingInput = {
    id?: string
    ownerId: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    roomPayment?: PaymentHistoryUncheckedCreateNestedManyWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutRoomInput
    posts?: PostsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomBillingInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomBillingInput, RoomUncheckedCreateWithoutRoomBillingInput>
  }

  export type UserUpsertWithoutRoomBillingInput = {
    update: XOR<UserUpdateWithoutRoomBillingInput, UserUncheckedUpdateWithoutRoomBillingInput>
    create: XOR<UserCreateWithoutRoomBillingInput, UserUncheckedCreateWithoutRoomBillingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomBillingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomBillingInput, UserUncheckedUpdateWithoutRoomBillingInput>
  }

  export type UserUpdateWithoutRoomBillingInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomBillingInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutRoomBillingInput = {
    update: XOR<RoomUpdateWithoutRoomBillingInput, RoomUncheckedUpdateWithoutRoomBillingInput>
    create: XOR<RoomCreateWithoutRoomBillingInput, RoomUncheckedCreateWithoutRoomBillingInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomBillingInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomBillingInput, RoomUncheckedUpdateWithoutRoomBillingInput>
  }

  export type RoomUpdateWithoutRoomBillingInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUpdateManyWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutRoomNestedInput
    posts?: PostsUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomBillingInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomPayment?: PaymentHistoryUncheckedUpdateManyWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutRoomNestedInput
    posts?: PostsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutRoomPaymentRecordInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomPaymentRecordInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomPaymentRecordInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomPaymentRecordInput, UserUncheckedCreateWithoutRoomPaymentRecordInput>
  }

  export type RoomCreateWithoutRoomPaymentRecordInput = {
    id?: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomInput
    roomBilling?: RoomBillingCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryCreateNestedManyWithoutRoomInput
    posts?: PostsCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomPaymentRecordInput = {
    id?: string
    ownerId: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    roomBilling?: RoomBillingUncheckedCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryUncheckedCreateNestedManyWithoutRoomInput
    posts?: PostsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomPaymentRecordInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomPaymentRecordInput, RoomUncheckedCreateWithoutRoomPaymentRecordInput>
  }

  export type UserCreateWithoutPayedByInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayedByInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayedByInput, UserUncheckedCreateWithoutPayedByInput>
  }

  export type UserUpsertWithoutRoomPaymentRecordInput = {
    update: XOR<UserUpdateWithoutRoomPaymentRecordInput, UserUncheckedUpdateWithoutRoomPaymentRecordInput>
    create: XOR<UserCreateWithoutRoomPaymentRecordInput, UserUncheckedCreateWithoutRoomPaymentRecordInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomPaymentRecordInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomPaymentRecordInput, UserUncheckedUpdateWithoutRoomPaymentRecordInput>
  }

  export type UserUpdateWithoutRoomPaymentRecordInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomPaymentRecordInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutRoomPaymentRecordInput = {
    update: XOR<RoomUpdateWithoutRoomPaymentRecordInput, RoomUncheckedUpdateWithoutRoomPaymentRecordInput>
    create: XOR<RoomCreateWithoutRoomPaymentRecordInput, RoomUncheckedCreateWithoutRoomPaymentRecordInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomPaymentRecordInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomPaymentRecordInput, RoomUncheckedUpdateWithoutRoomPaymentRecordInput>
  }

  export type RoomUpdateWithoutRoomPaymentRecordInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomNestedInput
    roomBilling?: RoomBillingUpdateOneWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUpdateManyWithoutRoomNestedInput
    posts?: PostsUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomPaymentRecordInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomBilling?: RoomBillingUncheckedUpdateOneWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUncheckedUpdateManyWithoutRoomNestedInput
    posts?: PostsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutPayedByInput = {
    update: XOR<UserUpdateWithoutPayedByInput, UserUncheckedUpdateWithoutPayedByInput>
    create: XOR<UserCreateWithoutPayedByInput, UserUncheckedCreateWithoutPayedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayedByInput, UserUncheckedUpdateWithoutPayedByInput>
  }

  export type UserUpdateWithoutPayedByInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayedByInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentHistoryInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentHistoryInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
  }

  export type UserCreateWithoutClientInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClientInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
  }

  export type RoomCreateWithoutRoomPaymentInput = {
    id?: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomInput
    roomBilling?: RoomBillingCreateNestedOneWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutRoomInput
    posts?: PostsCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRoomPaymentInput = {
    id?: string
    ownerId: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    roomBilling?: RoomBillingUncheckedCreateNestedOneWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutRoomInput
    posts?: PostsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRoomPaymentInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRoomPaymentInput, RoomUncheckedCreateWithoutRoomPaymentInput>
  }

  export type UserUpsertWithoutPaymentHistoryInput = {
    update: XOR<UserUpdateWithoutPaymentHistoryInput, UserUncheckedUpdateWithoutPaymentHistoryInput>
    create: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentHistoryInput, UserUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type UserUpdateWithoutPaymentHistoryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentHistoryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutClientInput = {
    update: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
    create: XOR<UserCreateWithoutClientInput, UserUncheckedCreateWithoutClientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientInput, UserUncheckedUpdateWithoutClientInput>
  }

  export type UserUpdateWithoutClientInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClientInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutRoomPaymentInput = {
    update: XOR<RoomUpdateWithoutRoomPaymentInput, RoomUncheckedUpdateWithoutRoomPaymentInput>
    create: XOR<RoomCreateWithoutRoomPaymentInput, RoomUncheckedCreateWithoutRoomPaymentInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRoomPaymentInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRoomPaymentInput, RoomUncheckedUpdateWithoutRoomPaymentInput>
  }

  export type RoomUpdateWithoutRoomPaymentInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomNestedInput
    roomBilling?: RoomBillingUpdateOneWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutRoomNestedInput
    posts?: PostsUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRoomPaymentInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomBilling?: RoomBillingUncheckedUpdateOneWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutRoomNestedInput
    posts?: PostsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PostsCreateWithoutSavedPostInput = {
    id?: string
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutPostsInput
    owner: UserCreateNestedOneWithoutPostsInput
    totalCount?: PostViewCountCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutSavedPostInput = {
    id?: string
    roomId: string
    ownerId: string
    createdAt?: Date | string
    totalCount?: PostViewCountUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutSavedPostInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutSavedPostInput, PostsUncheckedCreateWithoutSavedPostInput>
  }

  export type UserCreateWithoutSavedPostInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedPostInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedPostInput, UserUncheckedCreateWithoutSavedPostInput>
  }

  export type PostsUpsertWithoutSavedPostInput = {
    update: XOR<PostsUpdateWithoutSavedPostInput, PostsUncheckedUpdateWithoutSavedPostInput>
    create: XOR<PostsCreateWithoutSavedPostInput, PostsUncheckedCreateWithoutSavedPostInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutSavedPostInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutSavedPostInput, PostsUncheckedUpdateWithoutSavedPostInput>
  }

  export type PostsUpdateWithoutSavedPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPostsNestedInput
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    totalCount?: PostViewCountUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutSavedPostInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalCount?: PostViewCountUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutSavedPostInput = {
    update: XOR<UserUpdateWithoutSavedPostInput, UserUncheckedUpdateWithoutSavedPostInput>
    create: XOR<UserCreateWithoutSavedPostInput, UserUncheckedCreateWithoutSavedPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedPostInput, UserUncheckedUpdateWithoutSavedPostInput>
  }

  export type UserUpdateWithoutSavedPostInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedPostInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomCreateWithoutPostsInput = {
    id?: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutRoomInput
    roomBilling?: RoomBillingCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryCreateNestedManyWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPostsInput = {
    id?: string
    ownerId: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
    roomBilling?: RoomBillingUncheckedCreateNestedOneWithoutRoomInput
    roomPayment?: PaymentHistoryUncheckedCreateNestedManyWithoutRoomInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPostsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPostsInput, RoomUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
    postViewCount?: PostViewCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type SavedPostCreateWithoutPostInput = {
    id?: string
    savedDate?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedPostInput
  }

  export type SavedPostUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    savedDate?: Date | string
    createdAt?: Date | string
  }

  export type SavedPostCreateOrConnectWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    create: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput>
  }

  export type SavedPostCreateManyPostInputEnvelope = {
    data: SavedPostCreateManyPostInput | SavedPostCreateManyPostInput[]
  }

  export type PostViewCountCreateWithoutPostInput = {
    id?: string
    viewDate?: Date | string
    user: UserCreateNestedOneWithoutPostViewCountInput
  }

  export type PostViewCountUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    viewDate?: Date | string
  }

  export type PostViewCountCreateOrConnectWithoutPostInput = {
    where: PostViewCountWhereUniqueInput
    create: XOR<PostViewCountCreateWithoutPostInput, PostViewCountUncheckedCreateWithoutPostInput>
  }

  export type PostViewCountCreateManyPostInputEnvelope = {
    data: PostViewCountCreateManyPostInput | PostViewCountCreateManyPostInput[]
  }

  export type RoomUpsertWithoutPostsInput = {
    update: XOR<RoomUpdateWithoutPostsInput, RoomUncheckedUpdateWithoutPostsInput>
    create: XOR<RoomCreateWithoutPostsInput, RoomUncheckedCreateWithoutPostsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutPostsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutPostsInput, RoomUncheckedUpdateWithoutPostsInput>
  }

  export type RoomUpdateWithoutPostsInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomNestedInput
    roomBilling?: RoomBillingUpdateOneWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUpdateManyWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPostsInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomBilling?: RoomBillingUncheckedUpdateOneWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUncheckedUpdateManyWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
    postViewCount?: PostViewCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavedPostUpsertWithWhereUniqueWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    update: XOR<SavedPostUpdateWithoutPostInput, SavedPostUncheckedUpdateWithoutPostInput>
    create: XOR<SavedPostCreateWithoutPostInput, SavedPostUncheckedCreateWithoutPostInput>
  }

  export type SavedPostUpdateWithWhereUniqueWithoutPostInput = {
    where: SavedPostWhereUniqueInput
    data: XOR<SavedPostUpdateWithoutPostInput, SavedPostUncheckedUpdateWithoutPostInput>
  }

  export type SavedPostUpdateManyWithWhereWithoutPostInput = {
    where: SavedPostScalarWhereInput
    data: XOR<SavedPostUpdateManyMutationInput, SavedPostUncheckedUpdateManyWithoutPostInput>
  }

  export type PostViewCountUpsertWithWhereUniqueWithoutPostInput = {
    where: PostViewCountWhereUniqueInput
    update: XOR<PostViewCountUpdateWithoutPostInput, PostViewCountUncheckedUpdateWithoutPostInput>
    create: XOR<PostViewCountCreateWithoutPostInput, PostViewCountUncheckedCreateWithoutPostInput>
  }

  export type PostViewCountUpdateWithWhereUniqueWithoutPostInput = {
    where: PostViewCountWhereUniqueInput
    data: XOR<PostViewCountUpdateWithoutPostInput, PostViewCountUncheckedUpdateWithoutPostInput>
  }

  export type PostViewCountUpdateManyWithWhereWithoutPostInput = {
    where: PostViewCountScalarWhereInput
    data: XOR<PostViewCountUpdateManyMutationInput, PostViewCountUncheckedUpdateManyWithoutPostInput>
  }

  export type PostsCreateWithoutTotalCountInput = {
    id?: string
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutPostsInput
    owner: UserCreateNestedOneWithoutPostsInput
    savedPost?: SavedPostCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutTotalCountInput = {
    id?: string
    roomId: string
    ownerId: string
    createdAt?: Date | string
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutTotalCountInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutTotalCountInput, PostsUncheckedCreateWithoutTotalCountInput>
  }

  export type UserCreateWithoutPostViewCountInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    userRequest?: UserRequestCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanCreateNestedManyWithoutUserInput
    room?: RoomCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordCreateNestedManyWithoutClientInput
    posts?: PostsCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostViewCountInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    isOnboarded?: boolean
    isVerified?: boolean
    isAssignedOwner?: boolean
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userRequest?: UserRequestUncheckedCreateNestedManyWithoutUserInput
    subscriptionPlan?: SubscriptionPlanUncheckedCreateNestedManyWithoutUserInput
    room?: RoomUncheckedCreateNestedManyWithoutOwnerInput
    roomBilling?: RoomBillingUncheckedCreateNestedManyWithoutOwnerInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutOwnerInput
    client?: PaymentHistoryUncheckedCreateNestedManyWithoutClientInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedCreateNestedManyWithoutOwnerInput
    payedBy?: RoomPaymentRecordUncheckedCreateNestedManyWithoutClientInput
    posts?: PostsUncheckedCreateNestedManyWithoutOwnerInput
    savedPost?: SavedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostViewCountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostViewCountInput, UserUncheckedCreateWithoutPostViewCountInput>
  }

  export type PostsUpsertWithoutTotalCountInput = {
    update: XOR<PostsUpdateWithoutTotalCountInput, PostsUncheckedUpdateWithoutTotalCountInput>
    create: XOR<PostsCreateWithoutTotalCountInput, PostsUncheckedCreateWithoutTotalCountInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutTotalCountInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutTotalCountInput, PostsUncheckedUpdateWithoutTotalCountInput>
  }

  export type PostsUpdateWithoutTotalCountInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPostsNestedInput
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    savedPost?: SavedPostUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutTotalCountInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedPost?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutPostViewCountInput = {
    update: XOR<UserUpdateWithoutPostViewCountInput, UserUncheckedUpdateWithoutPostViewCountInput>
    create: XOR<UserCreateWithoutPostViewCountInput, UserUncheckedCreateWithoutPostViewCountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostViewCountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostViewCountInput, UserUncheckedUpdateWithoutPostViewCountInput>
  }

  export type UserUpdateWithoutPostViewCountInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUpdateManyWithoutUserNestedInput
    room?: RoomUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUpdateManyWithoutClientNestedInput
    posts?: PostsUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostViewCountInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isAssignedOwner?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userRequest?: UserRequestUncheckedUpdateManyWithoutUserNestedInput
    subscriptionPlan?: SubscriptionPlanUncheckedUpdateManyWithoutUserNestedInput
    room?: RoomUncheckedUpdateManyWithoutOwnerNestedInput
    roomBilling?: RoomBillingUncheckedUpdateManyWithoutOwnerNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutOwnerNestedInput
    client?: PaymentHistoryUncheckedUpdateManyWithoutClientNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutOwnerNestedInput
    payedBy?: RoomPaymentRecordUncheckedUpdateManyWithoutClientNestedInput
    posts?: PostsUncheckedUpdateManyWithoutOwnerNestedInput
    savedPost?: SavedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRequestCreateManyUserInput = {
    id?: string
    requestedRole: $Enums.UserRole
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type SubscriptionPlanCreateManyUserInput = {
    id?: string
    type?: $Enums.SubscriptionType
    status?: $Enums.SubscriptionStatus
    startDate?: Date | string
    endDate?: Date | string | null
    renewalDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateManyOwnerInput = {
    id?: string
    roomStatus?: $Enums.RoomStatus
    province: number
    location: string
    lon?: number | null
    lat?: number | null
    roomNumber: number
    title: string
    description: string
    roomImages?: RoomCreateroomImagesInput | string[]
    numberOfRooms: number
    beds: number
    toilet: number
    clients?: RoomCreateclientsInput | string[]
    roomCapacity?: number
    roomType: $Enums.RoomType
    roomFor: $Enums.RoomFor
    dueAmount?: number
    clientInitationData?: Date | string | null
    startedPriceFromDate?: Date | string | null
    lastPayedDate?: Date | string | null
    createdAt?: Date | string
  }

  export type RoomBillingCreateManyOwnerInput = {
    id?: string
    roomId: string
    water?: number
    electricity?: number
    internet?: number
    roomCost?: number
    createdAt?: Date | string
  }

  export type PaymentHistoryCreateManyOwnerInput = {
    id?: string
    payedBy: string
    totalAmount: number
    roomId: string
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
  }

  export type PaymentHistoryCreateManyClientInput = {
    id?: string
    ownerId: string
    totalAmount: number
    roomId: string
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
  }

  export type RoomPaymentRecordCreateManyOwnerInput = {
    id?: string
    description: string
    roomId: string
    payedBy: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
  }

  export type RoomPaymentRecordCreateManyClientInput = {
    id?: string
    description: string
    ownerId: string
    roomId: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
  }

  export type PostsCreateManyOwnerInput = {
    id?: string
    roomId: string
    createdAt?: Date | string
  }

  export type SavedPostCreateManyUserInput = {
    id?: string
    postId: string
    savedDate?: Date | string
    createdAt?: Date | string
  }

  export type PostViewCountCreateManyUserInput = {
    id?: string
    postId: string
    viewDate?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRequestUpdateWithoutUserInput = {
    requestedRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRequestUncheckedUpdateWithoutUserInput = {
    requestedRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRequestUncheckedUpdateManyWithoutUserInput = {
    requestedRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUpdateWithoutUserInput = {
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateWithoutUserInput = {
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyWithoutUserInput = {
    type?: EnumSubscriptionTypeFieldUpdateOperationsInput | $Enums.SubscriptionType
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutOwnerInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomBilling?: RoomBillingUpdateOneWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUpdateManyWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUpdateManyWithoutRoomNestedInput
    posts?: PostsUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutOwnerInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomBilling?: RoomBillingUncheckedUpdateOneWithoutRoomNestedInput
    roomPayment?: PaymentHistoryUncheckedUpdateManyWithoutRoomNestedInput
    roomPaymentRecord?: RoomPaymentRecordUncheckedUpdateManyWithoutRoomNestedInput
    posts?: PostsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutOwnerInput = {
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    province?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lon?: NullableFloatFieldUpdateOperationsInput | number | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    roomNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    roomImages?: RoomUpdateroomImagesInput | string[]
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    toilet?: IntFieldUpdateOperationsInput | number
    clients?: RoomUpdateclientsInput | string[]
    roomCapacity?: IntFieldUpdateOperationsInput | number
    roomType?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    roomFor?: EnumRoomForFieldUpdateOperationsInput | $Enums.RoomFor
    dueAmount?: FloatFieldUpdateOperationsInput | number
    clientInitationData?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startedPriceFromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPayedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBillingUpdateWithoutOwnerInput = {
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomBillingNestedInput
  }

  export type RoomBillingUncheckedUpdateWithoutOwnerInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomBillingUncheckedUpdateManyWithoutOwnerInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    water?: FloatFieldUpdateOperationsInput | number
    electricity?: FloatFieldUpdateOperationsInput | number
    internet?: FloatFieldUpdateOperationsInput | number
    roomCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUpdateWithoutOwnerInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutClientNestedInput
    room?: RoomUpdateOneRequiredWithoutRoomPaymentNestedInput
  }

  export type PaymentHistoryUncheckedUpdateWithoutOwnerInput = {
    payedBy?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutOwnerInput = {
    payedBy?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUpdateWithoutClientInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPaymentHistoryNestedInput
    room?: RoomUpdateOneRequiredWithoutRoomPaymentNestedInput
  }

  export type PaymentHistoryUncheckedUpdateWithoutClientInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutClientInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    roomId?: StringFieldUpdateOperationsInput | string
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordUpdateWithoutOwnerInput = {
    description?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutRoomPaymentRecordNestedInput
    client?: UserUpdateOneRequiredWithoutPayedByNestedInput
  }

  export type RoomPaymentRecordUncheckedUpdateWithoutOwnerInput = {
    description?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordUncheckedUpdateManyWithoutOwnerInput = {
    description?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordUpdateWithoutClientInput = {
    description?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomPaymentRecordNestedInput
    room?: RoomUpdateOneRequiredWithoutRoomPaymentRecordNestedInput
  }

  export type RoomPaymentRecordUncheckedUpdateWithoutClientInput = {
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordUncheckedUpdateManyWithoutClientInput = {
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUpdateWithoutOwnerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPostsNestedInput
    savedPost?: SavedPostUpdateManyWithoutPostNestedInput
    totalCount?: PostViewCountUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutOwnerInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedPost?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
    totalCount?: PostViewCountUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutOwnerInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUpdateWithoutUserInput = {
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutSavedPostNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewCountUpdateWithoutUserInput = {
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutTotalCountNestedInput
  }

  export type PostViewCountUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewCountUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateManyRoomInput = {
    id?: string
    ownerId: string
    payedBy: string
    totalAmount: number
    payedamount: number
    dueAmount: number
    startedDate: Date | string
    createdAt?: Date | string
  }

  export type RoomPaymentRecordCreateManyRoomInput = {
    id?: string
    description: string
    ownerId: string
    payedBy: string
    amountTotal: number
    payedAmount: number
    dueAmount: number
    paymentStatus?: $Enums.PaymentStatus
    dueMoneyReason?: string | null
    createdAt?: Date | string
  }

  export type PostsCreateManyRoomInput = {
    id?: string
    ownerId: string
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateWithoutRoomInput = {
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPaymentHistoryNestedInput
    client?: UserUpdateOneRequiredWithoutClientNestedInput
  }

  export type PaymentHistoryUncheckedUpdateWithoutRoomInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutRoomInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    payedamount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    startedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordUpdateWithoutRoomInput = {
    description?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutRoomPaymentRecordNestedInput
    client?: UserUpdateOneRequiredWithoutPayedByNestedInput
  }

  export type RoomPaymentRecordUncheckedUpdateWithoutRoomInput = {
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPaymentRecordUncheckedUpdateManyWithoutRoomInput = {
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    payedBy?: StringFieldUpdateOperationsInput | string
    amountTotal?: FloatFieldUpdateOperationsInput | number
    payedAmount?: FloatFieldUpdateOperationsInput | number
    dueAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    dueMoneyReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUpdateWithoutRoomInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    savedPost?: SavedPostUpdateManyWithoutPostNestedInput
    totalCount?: PostViewCountUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutRoomInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedPost?: SavedPostUncheckedUpdateManyWithoutPostNestedInput
    totalCount?: PostViewCountUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutRoomInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostCreateManyPostInput = {
    id?: string
    userId: string
    savedDate?: Date | string
    createdAt?: Date | string
  }

  export type PostViewCountCreateManyPostInput = {
    id?: string
    userId: string
    viewDate?: Date | string
  }

  export type SavedPostUpdateWithoutPostInput = {
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedPostNestedInput
  }

  export type SavedPostUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedPostUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    savedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewCountUpdateWithoutPostInput = {
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostViewCountNestedInput
  }

  export type PostViewCountUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewCountUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}