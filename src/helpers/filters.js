/**
 * Creates a predicate to filter on based on a given property name and search term
 * @param {searchProperty} p The property name of each item that should be searched on
 * @param {searchTerm} s The search term being used
 */
export const searchTermFilter = (p, s) => {
  return (item) => item[p].includes(s)
}

/**
 * Creates a predicate to filter on based on a given property name and set of selected tags
 * @param {tagProperty} p The property name of each item containing the tags to search on
 * @param {selectedTags} t The set of tags that are currently selected
 */
export const tagFilter = (p, t) => {
  return (item) => {
    // No tags selected ==> Show all results
    if (t.size === 0) {
      return true
    }

    // Make sure tags have the right type
    let tags = item[p]
    if (typeof tags === 'string') {
      tags = tags.split(' ')
    } else if (!Array.isArray(tags)) {
      throw new Error('Tags property must be of string or array type!')
    }

    for (let i = 0; i < tags.length; ++i) {
      if (t.has(tags[i])) {
        return true
      }
    }

    return false
  }
}
