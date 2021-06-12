import React, { useState } from "react"
import { useListState } from "@mantine/hooks"
import { Cross1Icon, PlusIcon } from "@modulz/radix-icons"
import {
  Title,
  Text,
  Checkbox,
  TextInput,
  ActionIcon,
  Container,
  useMantineTheme,
} from "@mantine/core"

import styles from './xyz.module.css'

function randomId() {
  return Math.random().toString(36).substr(2, 9)
}

const INITIAL_STATE = [
  { value: "Buy 23 RTX 3080 cards", completed: false, key: randomId() },
  { value: "Mine Ethereum", completed: false, key: randomId() },
  {
    value: "Complain about miners on internet to prove innocence",
    completed: false,
    key: randomId(),
  },
  {
    value: "Sell broken cards on ebay to gamers",
    completed: false,
    key: randomId(),
  },
  {
    value: "Spend received money on new video cards",
    completed: false,
    key: randomId(),
  },
  { value: "Repeat the cycle", completed: false, key: randomId() },
]

export default function TodoList() {
  const theme = useMantineTheme()
  const [newItem, setNewItem] = useState("")
  const [state, handlers] = useListState(INITIAL_STATE)

  const items = state.reduce(
    (acc, item, index) => {
      acc[item.completed ? "completed" : "current"].push(
        // @ts-ignore
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: theme.spacing.xs,
          }}
          className={styles.test}
          key={item.key}
        >
          <span className={styles.other}>
            tester
          </span>
          <Checkbox
            size="xl"
            checked={item.completed}
            color="gray"
            onChange={(event) => {
              handlers.setItemProp(
                index,
                "completed",
                event.currentTarget.checked
              )
              if (event.currentTarget.checked) {
                handlers.reorder({ from: index, to: state.length - 1 })
              }
            }}
          />

          <TextInput
            style={{ flex: 1, marginLeft: theme.spacing.md }}
            placeholder="Your evil plan part"
            value={item.value}
            onChange={(event) =>
              handlers.setItemProp(index, "value", event.currentTarget.value)
            }
          />

          <ActionIcon
            size="lg"
            style={{ marginLeft: theme.spacing.xs }}
            onClick={() => handlers.remove(index)}
          >
            <Cross1Icon />
          </ActionIcon>
        </div>
      )

      return acc
    },
    { completed: [], current: [] }
  )

  return (
    <Container size="xs">
      <Title style={{ textAlign: "center", marginBottom: theme.spacing.xl }}>
        Business Plan
      </Title>

      {items.current}

      {items.completed.length > 0 && (
        <Text color="gray" size="sm" style={{ marginTop: theme.spacing.md }}>
          Completed
        </Text>
      )}
      {items.completed}

      <TextInput
        style={{ marginTop: theme.spacing.xl }}
        value={newItem}
        variant="filled"
        onChange={(event) => setNewItem(event.currentTarget.value)}
        icon={<PlusIcon />}
        placeholder="Add business plan task"
        onKeyDown={(event) => {
          if (
            event.nativeEvent.code === "Enter" &&
            event.currentTarget.value.trim().length > 0
          ) {
            handlers.append({
              value: event.currentTarget.value,
              completed: false,
              key: randomId(),
            })
            setNewItem("")
          }
        }}
      />
    </Container>
  )
}
