
import { createTamagui } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v6'

export const config = createTamagui(defaultConfig)

export default config

type Conf = typeof config

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}
