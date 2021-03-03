# next steps

- make the menu pretty
- do the thing

# design

## actions

- generateOutput. howw????
- updateTemplate
- addBlock
- attemptToRemoveBlock
- confirmRemoveBlock
- cancelRemoveBlock
- setError
- [?] togglePreview

## state

- inputs: { name, email, events: [{ title, description, bio, date }]}
- blocks: [{ title, template }]
- activeBlock
- error

## components

- Editor
- Menu
  - InputEnteringThing
  - BlockList
    - BlockListItem
  - NewBlockButton
- GenerateOutputButton
- Preview

## misc

storage
