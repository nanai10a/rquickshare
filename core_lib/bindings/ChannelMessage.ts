// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ChannelAction } from "./ChannelAction";
import type { ChannelDirection } from "./ChannelDirection";
import type { State } from "./State";
import type { TransferMetadata } from "./TransferMetadata";
import type { TransferType } from "./TransferType";

export type ChannelMessage = { id: string, direction: ChannelDirection, action: ChannelAction | null, rtype: TransferType | null, state: State | null, meta: TransferMetadata | null, };