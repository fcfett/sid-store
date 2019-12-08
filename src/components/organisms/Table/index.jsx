import React from "react";
import "./style.scss";

import Icon from "../../atoms/Icon";
import Loader from "../../atoms/Loader";

import Mutations from "../../../utils/mutations";
import Validators from "../../../utils/validators";
import { getEmptyPlaceholder } from "../../../utils/helpers";

const getColumnsArray = (data, columns) => {
  const dataItemModel = data[0] || {};
  const columnsValues = Object.values(columns);
  return columnsValues.length > 0 ? columnsValues : Object.keys(dataItemModel);
};

const getDataItemFilteredEntries = (item, columns) => {
  const columnsKeys = Object.keys(columns);
  const itemEntries = Object.entries(item);
  return columnsKeys.length > 0
    ? itemEntries.filter(([key]) => columnsKeys.includes(key))
    : itemEntries;
};

const applyMutations = (key, value, mutations) => {
  const mutationsKeys = Object.keys(mutations);
  if (mutationsKeys.includes(key)) {
    const { handler, restParams } = mutations[key];
    const rest = restParams || [];
    return handler(value, ...rest);
  }
  return value;
};

const getComputedData = (data, columns, mutations) => {
  const computedData = [];
  for (const item of data) {
    const computedItem = {};
    const filteredEntries = getDataItemFilteredEntries(item, columns);
    filteredEntries.map(
      ([key, val]) => (computedItem[key] = applyMutations(key, val, mutations))
    );
    computedData.push(computedItem);
  }
  return computedData;
};

const haldleValue = value =>
  Validators.isTimeString(value) ? Mutations.TimeStringToSeconds(value) : 0;
const handleDataType = value => (isNaN(value) ? haldleValue(value) : +value);

const renderHeadings = (tableId, arrCols, colsWidth) =>
  arrCols.map(col => (
    <th key={`${tableId}-th-${col}`} title={col} style={{ width: colsWidth }}>
      <span>{col}</span>
    </th>
  ));

const renderRows = (tableId, data, computedData, columns, actions, colsWidth) =>
  computedData.map((item, index) => {
    const rowId = `${tableId}-tr-${index}`;
    const actionsLength = actions.length;
    return (
      <tr
        key={rowId}
        className={`${
          actionsLength > 0 ? `actions-count-${actionsLength}` : ""
        }`}
      >
        {renderCells(rowId, colsWidth, item, columns)}
        {actionsLength > 0 && renderActionsCell(rowId, data[index], actions)}
      </tr>
    );
  });

const getHtmlText = text => {
  return (
    <span
      onCopy={Mutations.RemoveCopiedWordBreakers}
      dangerouslySetInnerHTML={{
        __html: Mutations.AddWordBreakers(text) || getEmptyPlaceholder()
      }}
    />
  );
};

const renderCells = (rowId, colsWidth, item, columns) =>
  Object.entries(item).map(([key, value]) => {
    const isObjectValue = Validators.isObject(value);
    const header = columns[key];
    const title = `${header}${value && !isObjectValue ? `: ${value}` : ""}`;
    const content = isObjectValue ? (
      <span>{value || getEmptyPlaceholder()}</span>
    ) : (
      getHtmlText(value)
    );
    return (
      <td
        key={`${rowId}-td-${key}`}
        data-header={header}
        title={title}
        style={{ width: colsWidth }}
      >
        {content}
      </td>
    );
  });

const renderActionsCell = (rowId, item, actions) => {
  const cellId = `${rowId}-td-actions`;
  return (
    <td key={cellId} className="actions">
      {actions.map(a => {
        const {
          action: { name, icon },
          handler
        } = a;
        return (
          <button
            key={`${cellId}-${icon}`}
            className="action"
            title={name}
            onClick={() => handler(item)}
          >
            <Icon name={icon} />
          </button>
        );
      })}
    </td>
  );
};

const sumDataItemValue = (data, key, totalizer) => {
  if (!data || data.length === 0) return;
  const dataPattern = data[0][key];
  const sum = data.reduce((acc, item) => acc + handleDataType(item[key]), 0);
  const sumBase =
    totalizer === Mutations.TotalizerType.AVERAGE ? data.length : 1;
  const value = sum / sumBase;
  return Validators.isTimeString(dataPattern)
    ? Mutations.SecondsToTime(value)
    : value;
};

const handleTotalizerType = totalizer =>
  totalizer === Mutations.TotalizerType.SUM ? "Somatório" : "Média";

const handleTotalizers = (data, columns, mutations, totalizers, colsWidth) => {
  const columnsKeys = Object.keys(columns);
  const totalizersKeys = Object.keys(totalizers);
  if (totalizersKeys.some(key => columnsKeys.includes(key))) {
    return columnsKeys.map(key => {
      const hasTotalizer = totalizersKeys.includes(key);
      const value = hasTotalizer
        ? sumDataItemValue(data, key, totalizers[key])
        : "";
      const mutation =
        hasTotalizer && mutations[key] ? mutations[key].handler : val => val;
      const mutatedValue = mutation(value);
      const type = handleTotalizerType(totalizers[key]);
      const header = `${columns[key]} (${type})`;
      return renderTotalizer(key, mutatedValue, header, colsWidth);
    });
  }
  return;
};

const renderTotalizer = (key, value, header, colsWidth) => {
  const title = value ? `${header}: ${value}` : "";
  return (
    <td
      key={`td-totalizer-${key}`}
      className={`td-totalizer ${key} ${!value ? "empty" : ""}`}
      data-header={header}
      title={title}
      style={{ width: colsWidth }}
    >
      {value ? <span>{value}</span> : ""}
    </td>
  );
};

export default props => {
  const { id, loaded } = props;
  const data = props.data || [];
  const columns = props.columns || {};
  const mutations = props.mutations || {};
  const actions = props.actions || {};
  const totalizers = props.totalizers || {};

  const computedColumns = getColumnsArray(data, columns);
  const columnsWidth = 100 / (Object.keys(columns).length || 1) + "%";
  const computedData = getComputedData(data, columns, mutations);

  const hasData = computedData.length > 0;
  const hasActions = hasData && Object.keys(actions).length > 0;
  const hasTotalizers = hasData && Object.keys(totalizers).length > 0;

  const tableId = `table-${id || Math.random() * 100}`;
  const clsNoResults = !hasData ? "no-results" : "";
  const clsActions = hasActions ? "actions" : "";

  return (
    <div id={tableId} className={`app-table ${clsNoResults} ${clsActions}`}>
      <table className="thead">
        <thead>
          <tr key="header">
            {renderHeadings(tableId, computedColumns, columnsWidth)}
          </tr>
        </thead>
      </table>
      <table className="tbody">
        <tbody>
          {loaded && hasData && (
            <>
              {renderRows(
                tableId,
                data,
                computedData,
                columns,
                actions,
                columnsWidth
              )}
            </>
          )}
          {(!loaded || (loaded && !hasData)) && (
            <tr>
              <td>
                {!loaded && <Loader />}
                {loaded && <span>Sem resultados.</span>}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {hasData && (
        <table className="tfoot">
          <tfoot>
            <tr
              key="totalizer"
              className="tr-totalizer"
              data-length={`Total: ${data.length} registro${
                data.length > 1 ? "s" : ""
              }`}
            >
              {!hasTotalizers && <td>&nbsp;</td>}
              {hasTotalizers &&
                handleTotalizers(
                  data,
                  columns,
                  mutations,
                  totalizers,
                  columnsWidth
                )}
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};
