import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  const styles = StyleSheet.create({
    row: {
      backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    },
    cell: {
      padding: '8px',
    },
    headerCell: {
      fontWeight: 'bold',
    },
  });

  return (
    <tr className={css(styles.row)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(styles.cell, styles.headerCell)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.cell, styles.headerCell)}>{textFirstCell}</th>
            <th className={css(styles.cell, styles.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.cell)}>{textFirstCell}</td>
          <td className={css(styles.cell)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

export default CourseListRow;
