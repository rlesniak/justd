'use client'

import React from 'react'

import { docs } from '#site/content'
import { goodTitle } from '@/lib/utils'
import { buttonStyles, Description, Grid, GridCollection, GridItem, Heading, Link } from 'ui'

type GroupedComponents = {
  [category: string]: {
    slug: string
    title: string
    order: number
    description: number
    published: boolean
  }[]
}

const groupByCategory = (data: any[]): GroupedComponents => {
  return data.reduce((acc: GroupedComponents, item) => {
    const parts = item.slug.split('/')
    if (parts[1] === 'components') {
      const category = parts[2]
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push({
        slug: item.slug,
        title: item.title,
        order: item.order,
        description: item.description,
        published: item.published
      })
    }
    return acc
  }, {})
}
export const groupedComponents = groupByCategory(docs.sort((a, b) => a.order - b.order))

export function CardListBox() {
  return (
    <div className="space-y-10 w-full">
      {Object.entries(groupedComponents).map(([category, components]) => (
        <div key={category}>
          <Heading id={category} className="mb-3 scroll-mt-28 font-medium" level={2}>
            {goodTitle(category)}
          </Heading>
          <Grid
            aria-label="Components"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2"
            columns={{
              initial: 1,
              sm: 2,
              lg: 3
            }}
          >
            <GridCollection items={components}>
              {(component) => (
                <GridItem
                  className="relative focus:outline-none p-4 lg:p-6 h-full flex flex-col w-full focus-visible:outline-none focus-visible:outline-primary rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline"
                  aria-label={component.title}
                  id={component.slug}
                >
                  <Link
                    className="absolute cursor-pointer inset-0 size-full"
                    aria-label={`View component ${component.title}`}
                    href={component.slug}
                  />
                  <div className="flex-1">
                    <Heading level={3}>{component.title}</Heading>
                    <Description className="block mt-2">{component.description}</Description>
                  </div>
                  <div className="justify-end flex mt-6">
                    <div className={buttonStyles({ intent: 'light/dark' })}>View</div>
                  </div>
                </GridItem>
              )}
            </GridCollection>
          </Grid>
        </div>
      ))}
    </div>
  )
}
