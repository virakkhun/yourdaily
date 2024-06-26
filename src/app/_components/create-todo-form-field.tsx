"use client";

import { TASK_PRIORITY_EMOJI_MAP } from "@/app/_domains/constants/task-priority-emoji-map";
import { TaskPriority } from "@/app/_domains/models/task-priority.enum";
import { Flex } from "@/core/components/flex";
import { Input, useInputFocus } from "@/core/components/input";
import { InputRadio } from "@/core/components/input-radio";
import { useRef } from "react";

export function CreateTodoFormField() {
  const ref = useRef<HTMLInputElement>(null);

  useInputFocus(ref);

  return (
    <Flex direction="col" justify="start" align="start" gap="md">
      <Input ref={ref} type="text" name="title" placeholder="task" required />
      <Flex width="fit" gap="md">
        <InputRadio name="priority" anchor="high" value={TaskPriority.HIGH}>
          {TASK_PRIORITY_EMOJI_MAP[TaskPriority.HIGH]}
        </InputRadio>
        <InputRadio
          name="priority"
          checked
          anchor="medium"
          value={TaskPriority.MEDIUM}
        >
          {TASK_PRIORITY_EMOJI_MAP[TaskPriority.MEDIUM]}
        </InputRadio>
        <InputRadio name="priority" anchor="low" value={TaskPriority.LOW}>
          {TASK_PRIORITY_EMOJI_MAP[TaskPriority.LOW]}
        </InputRadio>
      </Flex>
    </Flex>
  );
}
