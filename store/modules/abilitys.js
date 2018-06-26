import { Ability } from '@casl/ability'

export const ability = new Ability()

export const abilityPlugin = (store) => {
  ability.update(store.state.modules.user.rules)

  return store.subscribe((mutation) => {
    switch (mutation.type) {
      case 'modules/user/settules':
        ability.update(mutation.payload)
        break
      case 'modules/user/removetoken':
        ability.update([{ actions: 'read', subject: 'all' }])
        break
    }
  })
}
