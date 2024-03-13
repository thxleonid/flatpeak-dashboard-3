import { AccountSwitcher } from "./accountSwitcher";
import { Switch } from "src/components/ui/switch"
import { useState } from "react";
import { Button } from "./ui/button";
import { GearIcon } from '@radix-ui/react-icons';
import { AccountParams } from '../types'

interface HeaderProps {
  accounts: AccountParams[];
}

const Header: React.FC<HeaderProps> = ({accounts}) => {
  const [liveData, setLiveData] = useState(true);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-[45px] max-w-screen-2xl justify-between pl-[12px] pr-[26px] items-center">
            <div className="flex gap-[17px] items-center">
              <img src={require('src/assets/flatpeakLogo.png')}
                  alt="FlatPeak Logo" className="rounded-md object-cover h-[21px] w-[21px]" />
              <div className="text-[#B9C1CA] text-lg">/</div>
              <div className="min-w-[125px] text-sm">
                <AccountSwitcher isCollapsed={false} accounts={accounts}/>
              </div>
            </div>
            <div className="flex items-center gap-[23px] font-normal">
              <div className="w-[113px] flex justify-between items-center font-medium">
                <Switch checked={liveData} onCheckedChange={setLiveData} className="data-[state=checked]:bg-[#65A30D] data-[state=unchecked]:bg-[rgb(247,175,70)]"/>
                <label className={liveData ? 'text-[#94A3B8]' : 'text-[rgb(247,175,70)]'}>Live data</label>
              </div>
              <div className="flex items-center gap-[13px] h-[31px] [&>button]:font-normal">
                <Button variant="outline" className="h-full">Docs</Button>
                <Button variant="outline" className="h-full">Support</Button>
                <Button variant="destructive" className="h-full">Accounts</Button>
                <Button variant="link" size="icon">
                  <GearIcon className="h-[24px] w-[24px]" />
                </Button>
              </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header;