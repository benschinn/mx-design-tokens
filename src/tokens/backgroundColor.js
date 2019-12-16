import core from 'src/tokens/core'

const light = {
  ButtonLinkHover: core.Color.Primary100,
  ButtonPrimary: core.Color.Primary300,
  ButtonPrimaryHover: core.Color.Primary400,
  ButtonPrimaryDisabled: core.Color.Neutral200,
  ButtonNeutral: core.Color.NeutralWhite,
  ButtonNeutralHover: core.Color.NeutralWhite,
  ButtonNeutralDisabled: core.Color.NeutralWhite,
  ButtonTransparentHover: core.Color.Primary100,
  ButtonDestructive: core.Color.Error300,
  ButtonDestructiveHover: core.Color.Error400,
  ButtonDestructiveDisabled: core.Color.Neutral200,
  InputFocus: core.Color.NeutralWhite,
  InputDisabled: core.Color.TransparentNeutral100,
  Modal: core.Color.NeutralWhite,
  ModalScrim: core.Color.TransparentScrim,
  Body: core.Color.Neutral100,
  Container: core.Color.NeutralWhite,
  Card: core.Color.NeutralWhite,
  LeftNavItem: core.Color.NeutralWhite,
  LeftNavItemHover: core.Color.Neutral100,
  LeftNavItemActive: core.Color.Primary100,
  TabHover: core.Color.Neutral100,
}

const dark = {
  ...light,
  ButtonLinkHover: core.Color.Neutral700,
  ButtonPrimaryDisabled: core.Color.Neutral700,
  ButtonNeutral: core.Color.Neutral800,
  ButtonNeutralHover: core.Color.Neutral600,
  ButtonNeutralDisabled: core.Color.Neutral700,
  ButtonTransparentHover: core.Color.Neutral600,
  ButtonDestructiveDisabled: core.Color.Neutral700,
  InputFocus: core.Color.Neutral800,
  InputDisabled: "transparent",
  Modal: core.Color.Neutral800,
  ModalScrim: core.Color.TransparentScrimDarker,
  Body: core.Color.Neutral900,
  Container: core.Color.Neutral800,
  Card: core.Color.Neutral800,
  LeftNavItem: core.Color.Neutral800,
  LeftNavItemHover: core.Color.Neutral700,
  LeftNavItemActive: core.Color.Neutral900,
  TabHover: core.Color.Neutral700,
}

export default {
  light,
  dark,
}
