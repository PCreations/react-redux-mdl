import React from 'react'
import cx from 'classnames'

import Checkbox from './Checkbox'


export const MDLtable = ({ className, children, ...otherProps }) => {
    const tableClassName = cx({
        'mdl-data-table': true,
        'mdl-js-data-table': true
    }, className)

    return (
        <table className={tableClassName} {...otherProps}>
            {children}
        </table>
    )
}

export const MDLthead = ({ children, ...otherProps }) => <thead { ...otherProps }>{ children }</thead>

export const MDLtbody = ({ children, ...otherProps }) => <tbody { ...otherProps }>{ children }</tbody>

export const MDLtr = ({ children, selected, ...otherProps }) => (
    <tr
        className={cx({
            'is-selected': selected
        })}
        { ...otherProps }>
        { children }
    </tr>
)

export const MDLth = ({ children, nonNumeric, className, ...otherProps }) => (
    <th className={cx({
            'mdl-data-table__cell--non-numeric': nonNumeric,
        }, className)}
        { ...otherProps }>
        { children }
    </th>
)

export const MDLtd = ({ children, nonNumeric, className, ...otherProps }) => (
    <td
        className={cx({
            'mdl-data-table__cell--non-numeric': nonNumeric,
        }, className)}
        { ...otherProps }>
        { children }
    </td>
)