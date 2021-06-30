import React, { useState } from "react"
import TodoList from './TodoList'
import Button from './1_Button_SimpleJSdoc'
import ButtonTwo from './2_Button_JSdocTypeDef'
import ButtonClass from './3_Button_JSdocTypeDefClass'
import ButtonImportedTypes from './4_Button_JSdocImportedTypes'
import ButtonReactTypes from './5_Button_JSdocUsefulReactTypes'
import List from './6_List_TSProps'
import Card from './Card'

export default function App() {
  return (
    <div>
      <List message='jejeje' />
      <Card>
        hi
      </Card>
      <Button
        isActive
        style={{ color: 'green' }}  
      >
        Button text
      </Button>
      <ButtonTwo 
        textColor='green' 
        overrideStyles={{ color: 'blue' }} 
      />
      <ButtonClass 
        textColor='hi' 
      />
      <ButtonImportedTypes
        message='hello'
        count={2}
        disabled={true}
      />
      <ButtonReactTypes
        children1={<strong>bold</strong>}
      >
        <p>cool</p>
      </ButtonReactTypes>
      <TodoList />
    </div>
  )
}
