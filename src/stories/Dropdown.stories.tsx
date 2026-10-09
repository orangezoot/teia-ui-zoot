import type { Meta, StoryObj } from '@storybook/react'
import DropdownButton from '@atoms/dropdown/DropdownButton'
import { EventIcon } from '@icons/index'
import { DropDown } from '@atoms/dropdown/index'
import eventsResponse from '@data/events/events.json'

const meta: Meta<typeof DropDown> = {
  title: 'Atoms/Dropdown',
  component: DropDown,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof DropDown>

export const Base: Story = {
  render: ({}) => (
    <DropdownButton
      alt={'example dropdown'}
      icon={<EventIcon />}
      menuID="events"
      label={'A sample dropdown with an Icon'}
    >
      <DropDown menuID="events" vertical>
        {eventsResponse.events.map((evt) => (
          <div>
            <h3>{evt.title}</h3>
            <p>{evt.subtitle}</p>
          </div>
        ))}
      </DropDown>
    </DropdownButton>
  ),
}
