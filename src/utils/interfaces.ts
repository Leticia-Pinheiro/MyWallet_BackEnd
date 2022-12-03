import {users, records} from "@prisma/client"

export type TypeUser = Omit<users, 'id'>

export type TypeRecord = Omit<records, 'id'>