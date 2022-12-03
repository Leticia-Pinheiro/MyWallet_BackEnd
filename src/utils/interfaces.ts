import {users, records} from "@prisma/client"

export type TypeUser = Omit<users, 'id'>

export type TypeLogin = Omit<users, 'id' | 'name'>

export type TypeRecord = Omit<records, 'id'>