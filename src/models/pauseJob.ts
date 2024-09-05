/**
 * @file Job Order Schema
 * @copyright Phire Studio, 2022
 * @version 1.0.0
 * @module manufacturing/core/src/models/pauseJob.ts
 */

// Dependencies
import mongoose, { Document, model, Model, Schema, Types } from "mongoose";

// An interface that describes the properties
// that are required to create a new Item
interface PauseJobAttrs {
  id: string;
  user?: any;
  picklistNO: string;
  joNumber: string;
  fetchID: string;
  pauseReference: string;
  pauseTimestamp: Date;
  restartTimestamp: Date;
  pauseInterval: number;
  pauseReason: string;
  props: any;
  syncedToCloud?: boolean;
  canCloudSync?:boolean;
  createdAt: Date;
  updatedAt: Date;
}

// An interface that describes the properties
// that a Item Model has
interface PauseJobModel extends mongoose.Model<IPauseJob> {
  build(attrs: PauseJobAttrs): IPauseJob;
}

interface IPauseJob extends Document {
  id: string;
  user?: any;
  picklistNO: string;
  joNumber: string;
  fetchID: string;
  pauseReference: string;
  pauseTimestamp: Date;
  restartTimestamp: Date;
  pauseInterval: number;
  pauseReason: string;
  props: any;
  syncedToCloud: boolean;
  canCloudSync:boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PauseJobSchema: Schema = new Schema(
  {
    user: {
      type: Object,
    },
    picklisNO: {
      type: String,
    },
    joNumber: {
      type: String,
    },
    fetchID: {
      type: String,
    },
    pauseReference: {
      type: String,
    },
    pauseTimestamp: {
      type: Date,
    },
    pauseInterval: {
      type: Number,
    },
    restartTimestamp: {
      type: Date,
    },
    pauseReason: {
      type: String,
    },
    syncedToCloud:{
      type: Boolean
    },
    canCloudSync:{
      type: Boolean
    },
    props: {
      type: Object,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

interface PauseJobDoc extends Document {
  id: string;
  user?: any;
  picklistNO: string;
  joNumber: string;
  fetchID: string;
  pauseReference: string;
  pauseTimestamp: Date;
  restartTimestamp: Date;
  pauseInterval: number;
  pauseReason: string;
  syncedToCloud: boolean;
  canCloudSync:boolean;
  props: any;
  createdAt: Date;
  updatedAt: Date;
}

PauseJobSchema.statics.build = (attrs: PauseJobAttrs) => {
  return new PauseJob({
    _id: attrs.id,
    user: attrs.user,
    joNumber: attrs.joNumber,
    fetchID: attrs.fetchID,
    picklistNO: attrs.picklistNO,
    pauseReference: attrs.pauseReference,
    pauseTimestamp: attrs.pauseTimestamp,
    restartTimestamp: attrs.restartTimestamp,
    pauseInterval: attrs.pauseInterval,
    pauseReason: attrs.pauseReason,
    syncedToCloud: attrs.syncedToCloud,
    canCloudSync: attrs.canCloudSync,
    props: attrs.props,
    createdAt: attrs.createdAt,
    updatedAt: attrs.updatedAt,
  });
};

const PauseJob = mongoose.model<IPauseJob, PauseJobModel>(
  "PauseJob",
  PauseJobSchema
);

export { PauseJob, IPauseJob, PauseJobDoc };
