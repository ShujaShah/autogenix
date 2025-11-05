'use client';

import type { NodeProps } from "@xyflow/react";
import { PlusIcon } from "lucide-react";
import { memo } from 'react';
import { PlaceholderNode } from "@/components/react-flow/placeholder-node";
import { WorkflowNode } from "./workflow-node";
 
export const initialNode = memo((props: NodeProps) => {
  return (
    <WorkflowNode showToolbar={false}>
        <PlaceholderNode
        {...props}
      >
        <div className="cursor-pointer flex items-center justify-center">
          <PlusIcon/>
        </div>
      </PlaceholderNode>
    </WorkflowNode>
    
  )
});