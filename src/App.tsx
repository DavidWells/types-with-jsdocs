import React, { useState } from "react"
import TodoList from './TodoList'
import Button from './Button'
import ButtonClass from './ButtonClass'

import Card from './Card'
import List from './List'

export default function App() {
  return (
    <div>
      <List message='jejeje' />
      <Card>
        hi
      </Card>
      <Button textColor='blue' />
      <ButtonClass textColor='hi' />
      <TodoList />
    </div>
  )
}
