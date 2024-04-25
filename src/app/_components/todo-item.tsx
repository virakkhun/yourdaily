"use client";

import { Icon } from "@/core/components/icon";
import { Todo } from "../_domains/models/todo";
import { CheckBox } from "@/core/components/checkbox";
import { Action } from "@/core/components/action";

type Props = Todo & { onToggle: () => void; onDelete: () => void };
export function TodoItem(props: Props) {
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="flex items-center gap-3">
        <CheckBox check={props.status} onClick={props.onToggle} />
        <p className="text-lg">{props.title}</p>
      </div>

      <Action onClick={props.onDelete}>
        <Icon.X className="w-4 h-4" />
      </Action>
    </div>
  );
}