export interface VeryBasicHeaderProps {
  title: string
  indiceExercice: number
}

export type HeaderPropsForEleveStatic = VeryBasicHeaderProps &
{
  [key: string] : string | boolean | number
}

export interface BasicHeaderProps {
  title: string | undefined
  id: string
  indiceExercice: number
  indiceLastExercice: number
  interactifReady: boolean
  isSettingsVisible: boolean
}

export type HeaderProps = BasicHeaderProps &
{
  [key: string] : string | boolean | number
}
