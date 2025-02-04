//
// Copyright © 2024-2025 Hardcore Engineering Inc.
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

import type { Metadata, Plugin, Resource } from '@hcengineering/platform'
import { plugin } from '@hcengineering/platform'
import { AnyComponent } from '@hcengineering/ui'

/** @public */
export const presenceId = 'presence' as Plugin

export const presencePlugin = plugin(presenceId, {
  metadata: {
    PresenceUrl: '' as Metadata<string>
  },
  component: {
    Presence: '' as AnyComponent,
    PresenceAvatars: '' as AnyComponent
  },
  function: {
    SendMyData: '' as Resource<(key: string, data: any) => void>,
    SubscribeToOtherData: '' as Resource<(key: string, callback: (data: any) => void) => void>,
    UnsubscribeFromOtherData: '' as Resource<(key: string, callback: (data: any) => void) => void>
  }
})

export default presencePlugin
