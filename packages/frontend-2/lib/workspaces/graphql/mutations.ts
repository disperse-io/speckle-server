import { graphql } from '~~/lib/common/generated/gql'

export const workspaceUpdateRoleMutation = graphql(`
  mutation UpdateRole($input: WorkspaceRoleUpdateInput!) {
    workspaceMutations {
      updateRole(input: $input) {
        id
        team {
          id
          role
        }
      }
    }
  }
`)

export const inviteToWorkspaceMutation = graphql(`
  mutation InviteToWorkspace(
    $workspaceId: String!
    $input: [WorkspaceInviteCreateInput!]!
  ) {
    workspaceMutations {
      invites {
        batchCreate(workspaceId: $workspaceId, input: $input) {
          id
          invitedTeam {
            ...SettingsWorkspacesMembersInvitesTable_PendingWorkspaceCollaborator
          }
        }
      }
    }
  }
`)
