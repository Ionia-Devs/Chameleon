'use client'

import { useState } from 'react'
import { PhotographySkill, User } from '@prisma/client'

import { Toggle } from '@/components/ui/toggle'

import { handleConnectPhotographySkill } from '../actions'

interface ProfileSkillsProps {
  user: Pick<User, 'id'>
  isSelected: boolean
  photographySkillName: Pick<PhotographySkill, 'name'>
}

export default function ProfileSkill({
  user,
  isSelected,
  photographySkillName,
}: ProfileSkillsProps) {
  const [isLoading, setIsLoading] = useState(false)

  const toggleSpecialtySkill = async () => {
    setIsLoading(true)
    await handleConnectPhotographySkill({
      isDisconected: isSelected,
      photographySkillName: photographySkillName,
      userId: user,
      photographySkillType: 'CURRENT_FOCUS',
    })
    setIsLoading(false)
  }
  return (
    <Toggle
      disabled={isLoading}
      pressed={isSelected}
      onPressedChange={toggleSpecialtySkill}
      className={`m-1 h-8 bg-accent hover:bg-primary/80 hover:text-secondary data-[state=on]:bg-primary data-[state=on]:text-secondary disabled:bg-primary/80`}
    >
      {photographySkillName.name}
    </Toggle>
  )
}
