import type abstractParser from "../abstractParser";
import VideoContextParser from "./VideoContextParser";
import compactChannelRenderer from "./ChannelRendererParser";
import cellDividerModel from "./CellDividerParser";
import continuations from "./Continuations";

interface parsersList {
  [key: string]: Pick<typeof abstractParser, keyof typeof abstractParser> &
    (new () => abstractParser);
}

const parserStrats: parsersList = {
  videoWithContextModel: VideoContextParser,
  videoWithContextSlotsModel: VideoContextParser,
  compactChannelRenderer,
  cellDividerModel,
  continuations,
};

const parserFactory = (model: string): abstractParser | void => {
  const parser = parserStrats[model];
  if (!parser) {
    return undefined;
  }
  return new parser();
};

export default parserFactory;
