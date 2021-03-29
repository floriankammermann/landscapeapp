import fields from '../types/fields';
import _ from 'lodash';

export default function groupingLabel(field, id) {
    //console.log("groupingLabel field: " + field + ", id:" + id)
  const values = fields[field].answers;
    //console.log("groupingLabel fields: " + JSON.stringify(fields))
  const valueInfo = _.find(values, {id: id});
    //console.log("groupingLabel valueInfo: " + JSON.stringify(valueInfo))

  // there are cases, where don't have valueInfo / groupingLabel
  // but I (floriankammermann) don't know why this happens
  if (valueInfo == null) {
    return "no_grouping_label_value_info_null"
  } else if (valueInfo.groupingLabel == null) {
    return "no_grouping_label_value_grouping_label_missing"
  } else {
    return valueInfo.groupingLabel;
  }
}
