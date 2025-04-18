
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.UserRequestScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  requestedRole: 'requestedRole',
  updatedAt: 'updatedAt',
  createdAt: 'createdAt'
};

exports.Prisma.SubscriptionPlanScalarFieldEnum = {
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

exports.Prisma.RoomScalarFieldEnum = {
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

exports.Prisma.RoomBillingScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  roomId: 'roomId',
  water: 'water',
  electricity: 'electricity',
  internet: 'internet',
  roomCost: 'roomCost',
  createdAt: 'createdAt'
};

exports.Prisma.RoomPaymentRecordScalarFieldEnum = {
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

exports.Prisma.PaymentHistoryScalarFieldEnum = {
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

exports.Prisma.SavedPostScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  savedDate: 'savedDate',
  createdAt: 'createdAt'
};

exports.Prisma.PostsScalarFieldEnum = {
  id: 'id',
  roomId: 'roomId',
  ownerId: 'ownerId',
  createdAt: 'createdAt'
};

exports.Prisma.PostViewCountScalarFieldEnum = {
  id: 'id',
  postId: 'postId',
  userId: 'userId',
  viewDate: 'viewDate'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.UserRole = exports.$Enums.UserRole = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  OWNER: 'OWNER'
};

exports.SubscriptionType = exports.$Enums.SubscriptionType = {
  FREE: 'FREE',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

exports.SubscriptionStatus = exports.$Enums.SubscriptionStatus = {
  ACTIVE: 'ACTIVE',
  CANCELED: 'CANCELED',
  EXPIRED: 'EXPIRED',
  PENDING: 'PENDING'
};

exports.RoomStatus = exports.$Enums.RoomStatus = {
  VACANT: 'VACANT',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE'
};

exports.RoomType = exports.$Enums.RoomType = {
  FLAT: 'FLAT',
  ROOM: 'ROOM',
  SHUTTER: 'SHUTTER'
};

exports.RoomFor = exports.$Enums.RoomFor = {
  STUDENTS: 'STUDENTS',
  FAMILY: 'FAMILY',
  BUSINESS: 'BUSINESS'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
