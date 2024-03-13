"use client"

import * as React from "react"

import { cn } from "src/lib/utils"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "src/components/ui/select"

import { AccountParams } from '../types'

interface AccountSwitcherProps {
  isCollapsed: boolean
  accounts: AccountParams[]
}

export function AccountSwitcher({
  isCollapsed,
  accounts,
}: AccountSwitcherProps) {

  const [selectedAccount, setSelectedAccount] = React.useState<string>(
    accounts[0].email
  )


  
  const getIcon: React.FC<string> = (icon) => {
    return (
      <div className="w-[21px] h-[21px] rounded-xl overflow-hidden">
        {icon ? (
          <img src={icon} alt="User avatar" className="object-cover w-full h-full" />
        ) : (
          <div className="bg-gradient-to-bl from-[#3D5CFFBD] to-[#56FFA4] w-full h-full" />
        )}
      </div>
    );
  };

  const userIcon = (accounts.find((account) => account.email === selectedAccount)?.icon) as string;

  return (
    <Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <SelectTrigger
        className={cn(
          "flex items-center p-0 border-none shadow-none [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:truncate [&_svg]:h-[24px] [&_svg]:w-[24px] [&_svg]:shrink-0",
          isCollapsed &&
            "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
        )}
        aria-label="Select account"
      >
        <SelectValue placeholder="Select an account">
          {getIcon(userIcon && userIcon)}
          
          <span className={cn("ml-[14px] mr-[4px]", isCollapsed && "hidden")}>
            {
              accounts.find((account) => account.email === selectedAccount)
                ?.label
            }
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {accounts.map((account) => (
          <SelectItem key={account.email} value={account.email}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
              {getIcon(account.icon)}
              {account.email}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}