//
// Copyright © 2024 Hardcore Engineering Inc.
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

export interface DocumentId {
  workspaceId: string
  objectClass: string
  objectId: string
  objectAttr: string
}

export function decodeDocumentId (name: string): DocumentId {
  const [workspaceId, objectClass, objectId, objectAttr] = name.split('|')
  if (workspaceId == null || objectClass == null || objectId == null || objectAttr == null) {
    throw new Error('Malformed document id')
  }
  return { workspaceId, objectClass, objectId, objectAttr }
}

export function ydocBlobId ({ objectId, objectAttr }: DocumentId): string {
  // generate ydoc blob id compatible with platform collaborator
  return `${objectId}%${objectAttr}`
}

export function jsonBlobId ({ objectId, objectAttr }: DocumentId): string {
  // generate ydoc json id compatible with platform collaborator
  return [objectId, objectAttr, Date.now()].join('-')
}

export function extractStrParam (value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value
}
