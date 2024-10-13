'use client'

import React from 'react'

import { Button, Drawer, TextField } from 'ui'

export default function DrawerControlledDemo() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(!isOpen)} appearance="outline">
        Login
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Login</Drawer.Title>
            <Drawer.Description>
              Please enter your credentials to access your account.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Body className="flex flex-col gap-4">
            <TextField label="Email" isRequired type="email" placeholder="Enter your email" />
            <TextField
              label="Password"
              isRequired
              type="password"
              placeholder="Enter your password"
            />
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.Close>Close</Drawer.Close>
            <Button onPress={() => setIsOpen(false)}>Login</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </>
  )
}
