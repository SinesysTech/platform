//
// Copyright © 2020-2024 Anticrm Platform Contributors.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { AccountRole, Doc, Person, Ref, WorkspaceInfoWithStatus } from '@hcengineering/core'
import type { Asset, IntlString, Metadata, Plugin, Resource, Status } from '@hcengineering/platform'
import { plugin } from '@hcengineering/platform'
import type { AnyComponent } from '@hcengineering/ui'
import type { WorkspaceLoginInfo } from '@hcengineering/account-client'

export type { LoginInfo, WorkspaceLoginInfo, OtpInfo, RegionInfo } from '@hcengineering/account-client'

/**
 * @public
 */
export const loginId = 'login' as Plugin

export default plugin(loginId, {
  metadata: {
    AccountsUrl: '' as Asset,
    LoginTokens: '' as Metadata<Record<string, string>>,
    LastToken: '' as Metadata<string>,
    LoginEndpoint: '' as Metadata<string>,
    LoginAccount: '' as Metadata<string>,
    DisableSignUp: '' as Metadata<boolean>,
    TransactorOverride: '' as Metadata<string>
  },
  component: {
    LoginApp: '' as AnyComponent,
    InviteLink: '' as AnyComponent
  },
  icon: {
    InviteWorkspace: '' as Asset
  },
  string: {
    LinkValidHours: '' as IntlString,
    EmailMask: '' as IntlString,
    NoLimit: '' as IntlString,
    InviteLimit: '' as IntlString
  },
  function: {
    SendInvite: '' as Resource<(email: string, role?: AccountRole) => Promise<void>>,
    GetInviteLink: '' as Resource<
    (
      expHours: number,
      mask: string,
      limit: number | undefined,
      role: AccountRole,
      navigateUrl?: string
    ) => Promise<string>
    >,
    LeaveWorkspace: '' as Resource<(email: string) => Promise<void>>,
    ChangePassword: '' as Resource<(oldPassword: string, password: string) => Promise<void>>,
    SelectWorkspace: '' as Resource<
    (workspace: string, token: string | null | undefined) => Promise<[Status, WorkspaceLoginInfo | undefined]>
    >,
    FetchWorkspace: '' as Resource<() => Promise<[Status, WorkspaceInfoWithStatus | undefined]>>,
    GetPerson: '' as Resource<() => Promise<[Status, Person]>>,
    GetWorkspaces: '' as Resource<() => Promise<WorkspaceInfoWithStatus[]>>
  }
})
