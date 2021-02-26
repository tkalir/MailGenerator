# next steps

- add new blocks
- save state to local storage

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
