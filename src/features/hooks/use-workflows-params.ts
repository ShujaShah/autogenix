import { useQueryStates } from 'nuqs';
import { workflowsParams } from '@/features/workflows/params';

export const useCreateWorkflowParams = () => {
  return useQueryStates(workflowsParams)
}