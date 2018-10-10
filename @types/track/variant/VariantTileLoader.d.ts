import { IDataSource } from "../../data-source/IDataSource";
import { Tile, TileLoader } from "../TileLoader";
import { VariantTrackModel } from "./VariantTrackModel";
export declare type VariantTilePayload = Array<{
    id: string;
    baseIndex: number;
    refSequence: string;
    alts: string[];
}>;
export declare class VariantTileLoader extends TileLoader<VariantTilePayload, void> {
    protected readonly dataSource: IDataSource;
    protected readonly model: VariantTrackModel;
    protected readonly contig: string;
    constructor(dataSource: IDataSource, model: VariantTrackModel, contig: string);
    protected mapLodLevel(l: number): number;
    protected getTilePayload(tile: Tile<VariantTilePayload>): Promise<VariantTilePayload> | VariantTilePayload;
}
export default VariantTileLoader;