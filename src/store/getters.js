import { filter } from 'lodash'

import Template from '@/models/Template'

export default {
  getByDefault: state => (defaults) => {
    return filter(state.templates, { is_default: defaults }).map(data => new Template(data))
  }
}
