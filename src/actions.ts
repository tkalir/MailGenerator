export const selectBlockType = "selectBlock" as const;
export const setBlockTextType = "setBlockText" as const;

export const selectBlock = (blockName: string) => ({
  type: selectBlockType,
  payload: { blockName },
});

export const setBlockText = (blockName: string, text: string) => ({
  type: setBlockTextType,
  payload: { blockName, text },
});

export type Action =
  | ReturnType<typeof selectBlock>
  | ReturnType<typeof setBlockText>;
