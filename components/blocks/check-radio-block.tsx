'use client'

import React, { useState } from 'react'

import { CardBlock } from '@/components/blocks'
import { Checkbox, CheckboxGroup, Radio, RadioGroup } from 'ui'

export function CheckRadioBlock() {
  const [selectedRadio, setSelectedRadio] = useState('lowSecurity')
  return (
    <CardBlock>
      <RadioGroup
        aria-labelledby="security-settings"
        value={selectedRadio}
        onChange={setSelectedRadio}
      >
        <h2 id="security-settings" className="sr-only">
          Security Settings
        </h2>
        <Radio value="highSecurity" description="Set security settings to high.">
          High Security
        </Radio>
        <CheckboxGroup
          aria-labelledby="encryption-firewall"
          defaultValue={['encryption']}
          className="ml-6"
          isDisabled={selectedRadio !== 'highSecurity'}
        >
          <h2 id="encryption-firewall" className="sr-only">
            Encryption and Firewall
          </h2>
          <Checkbox value="encryption" description="Enable encryption." isReadOnly>
            Encryption
          </Checkbox>
          <Checkbox value="firewall" description="Enable firewall protection.">
            Firewall
          </Checkbox>
          <Checkbox value="backup" description="Enable automatic backups.">
            Backup
          </Checkbox>
          <Checkbox value="anomalyDetection" description="Enable anomaly detection.">
            Anomaly Detection
          </Checkbox>
        </CheckboxGroup>
        <Radio value="lowSecurity" description="Set security settings to low.">
          Low Security
        </Radio>
        <Radio value="customSecurity" description="Customize security settings.">
          Customize Security
        </Radio>
      </RadioGroup>
    </CardBlock>
  )
}
