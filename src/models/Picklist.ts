/**
 * @file Pick List Schema
 * @copyright Phire Studio, 2023
 * @version 1.0.0
 * @module edge/src/models/Picklist.ts
 */

// Dependencies
import mongoose, { Document, model, Model, Schema, Types } from "mongoose";

// An interface that describes the properties
// that are required to create a new Item
interface PickListAttrs {
  id: string;
  picklistNo: string;
  picklistLine: string;
  orderNumber: string;
  orderDate: Date;
  pickListType: string;
  shipmentMarking?: string;
  quantity: number;
  fromBatch?: string;
  toBatch: string;
  orderHandler: string;
  deliveryAddressOne?: string;
  deliveryAddressTwo?: string;
  invoiceAddressOne?: string;
  invoiceAddressTwo?: string;
  lineItem: string;
  lineDescription: string;
  unit: string;
  binLocation?: string;
  stockBalance: number;
  warehouse: string;
  pdfURL?: string;
  cuttingNumber?: string;
  statusType?: string;
  props?: any;
  canCloudSync?: boolean;
}

// interface PickListProps {
//   app: string;
//   status: string;
//   statusNo: number;
// }

// An interface that describes the properties
// that a Item Model has
interface PickListModel extends mongoose.Model<IPickList> {
  build(attrs: PickListAttrs): IPickList;
}

const PickListSchema: Schema = new Schema(
  {
    picklistNo: {
      type: String,
      required: [true, "Pick List Number is required"],
    },
    picklistLine: {
      type: String,
      required: [true, "Pick List Line is required"],
    },
    orderNumber: {
      type: String,
      required: [true, "Order Number is required"],
    },
    orderDate: {
      type: Date,
      required: [true, "Order Date is required"],
    },
    pickListType: {
      type: String,
      enum: ["S", "C", "R"], //S for standard coil, C for Cutting, R for Rework,
      required: [true, "Pick List Type is Required"],
    },
    shipmentMarking: {
      type: String,
    },
    quantity: {
      type: Number,
      required: [true, "Quantity required"],
    },
    //Mama Drum
    fromBatch: {
      type: String,
    },
    //Baby Drum
    toBatch: {
      type: String,
      required: [true, "To Batch is required"],
    },
    orderHandler: {
      type: String,
      required: [true, "Order Handler is required"],
    },
    deliveryAddressOne: {
      type: String,
    },
    deliveryAddressTwo: {
      type: String,
    },
    invoiceAddressOne: {
      type: String,
    },
    invoiceAddressTwo: {
      type: String,
    },
    lineItem: {
      type: String,
      required: [true, "Line Item is Required"],
    },
    lineDescription: {
      type: String,
      required: [true, "Line Description is Required"],
    },
    unit: {
      type: String,
      required: [true, "Unit is Required"],
    },
    binLocation: {
      type: String,
    },
    stockBalance: {
      type: Number,
      required: [true, "Stock Balance is required"],
    },
    warehouse: {
      type: String,
      required: [true, "Warehouse is required"],
    },
    pdfURL: {
      type: String,
    },
    cuttingNumber: {
      type: String,
    },
    props: {
      type: Object,
    },
    statusType: {
      type: String,
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

PickListSchema.statics.build = (attrs: PickListAttrs) => {
  return new PickList({
    _id: attrs.id,
    picklistNo: attrs.picklistNo,
    picklistLine: attrs.picklistLine,
    orderNumber: attrs.orderNumber,
    orderDate: attrs.orderDate,
    pickListType: attrs.pickListType,
    shipmentMarking: attrs.shipmentMarking,
    quantity: attrs.quantity,
    fromBatch: attrs.fromBatch,
    toBatch: attrs.toBatch,
    orderHandler: attrs.orderHandler,
    deliveryAddressOne: attrs.deliveryAddressOne,
    deliveryAddressTwo: attrs.deliveryAddressTwo,
    invoiceAddressOne: attrs.invoiceAddressOne,
    invoiceAddressTwo: attrs.invoiceAddressTwo,
    lineItem: attrs.lineItem,
    lineDescription: attrs.lineDescription,
    unit: attrs.unit,
    binLocation: attrs.binLocation,
    stockBalance: attrs.stockBalance,
    warehouse: attrs.warehouse,
    pdfURL: attrs.pdfURL,
    cuttingNumber: attrs.cuttingNumber,
    props: attrs.props,
    statusType: attrs.statusType,
  });
};

interface IPickList extends Document {
  id: string;
  picklistNo: string;
  picklistLine: string;
  orderNumber: string;
  orderDate: Date;
  pickListType: string;
  shipmentMarking?: string;
  quantity: number;
  fromBatch?: string;
  toBatch: string;
  orderHandler: string;
  deliveryAddressOne?: string;
  deliveryAddressTwo?: string;
  invoiceAddressOne?: string;
  invoiceAddressTwo?: string;
  lineItem: string;
  lineDescription: string;
  unit: string;
  binLocation?: string;
  stockBalance: number;
  warehouse: string;
  pdfURL?: string;
  cuttingNumber?: string;
  props?: any;
  statusType?: string;
  canCloudSync?: boolean;
}

interface PickListSyncInterface {
  orderNumber: string;
  pickListLine: string;
  pickListNo: string;
  orderDate: string;
  pickListType: string;
  fromBatch: string;
  orderHandler: string;
  lineItem: string;
  lineDescription: string;
  unit: string;
  stockBalance: string;
  warehouse: string;
  jobOrderNo: string;
  cableLength: number;
  JS: string;
  JE: string;
  MDS: string;
  MDE: string;
  MSS: string;
  MSE: string;
  BSS: string;
  BSE: string;
  RS: string;
  RE: string;
  PLS: string;
  PLE: string;
  PS: string;
  PE: string;
  DPS: string;
  DPE: string;
}
interface ItemSyncInterface {
  item?: string;
  pickList: string;
  orderNumber: string;
  quantity: number;
}

const PickList = mongoose.model<IPickList, PickListModel>(
  "PickList",
  PickListSchema
);

export {
  PickList,
  PickListAttrs,
  IPickList,
  PickListSyncInterface,
  ItemSyncInterface,
};
