/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   mixins/common-mixin.js
 */

// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {ListItemUtils} from './list-item-utils-mixin.js';

export {CommonFunctionality};

/**
 * Common functionality for single selection and multiple selection dropdown
 */
declare function CommonFunctionality<T extends new (...args: any[]) => {}>(base: T): T & CommonFunctionalityConstructor;

interface CommonFunctionalityConstructor {
  new (...args: any[]): CommonFunctionality;
}

export {CommonFunctionalityConstructor};

interface CommonFunctionality extends ListItemUtils {
  /**
   * Dropdown label
   */
  label: string | null | undefined;
  noLabelFloat: boolean | null | undefined;
  alwaysFloatLabel: boolean | null | undefined;
  placeholder: string | null | undefined;
  required: boolean | null | undefined;
  errorMessage: string | null | undefined;
  autoValidate: boolean | null | undefined;
  disabled: boolean | null | undefined;
  readonly: boolean | null | undefined;
  invalid: boolean | null | undefined;

  /**
   * Makes the dropdown to show top or bottom (or left - right) where it will fit better
   */
  noDynamicAlign: boolean | null | undefined;
  search: string | null | undefined;

  /**
   * Array of objects, dropdowns options used to compute shownOptions
   */
  options: any[] | null | undefined;

  /**
   * Options seen by user
   */
  readonly shownOptions: any[] | null | undefined;
  searchedOptionsLength: number | null | undefined;

  /**
   * Flag to show `None` option (first dropdown option)
   * Used to reset single selection dropdown selected value
   */
  enableNoneOption: boolean | null | undefined;
  hideSearch: boolean | null | undefined;
  dropdownIsClosing: boolean | null | undefined;

  /**
   * Limit displayed options
   */
  shownOptionsLimit: number | null | undefined;

  /**
   * Flag to show a no options avaliable warning
   */
  readonly noOptionsAvailable: boolean | null | undefined;

  /**
   * Flag to show the limit of options shown in dropdown
   */
  readonly showLimitWarning: boolean | null | undefined;

  /**
   * Flag used to show no search result found warning
   */
  readonly showNoSearchResultsWarning: boolean | null | undefined;

  /**
   * Stop autofocus from paper-dialog
   */
  disableOnFocusHandling: boolean | null | undefined;

  /**
   * Element that will prevent dropdown to overflow outside it's margins
   */
  fitInto: object | null | undefined;

  /**
   * Margin added if dropdown bottom is too close to the viewport bottom margin
   */
  viewportEdgeMargin: number | null | undefined;

  /**
   * Vertical offset for dropdownMenu
   */
  verticalOffset: number | null | undefined;

  /**
   * By default the search string is reset when the dropdown closes
   * This flag allows the search value to persist after the dropdown is closed
   */
  preserveSearchOnClose: boolean | null | undefined;

  /**
   * Flag to trigger `etools-selected-items-changed` event
   */
  triggerValueChangeEvent: boolean | null | undefined;
  elemAttached: boolean | null | undefined;
  autoWidth: boolean | null | undefined;
  maxWidth: string | null | undefined;
  minWidth: string | null | undefined;
  horizontalAlign: string | null | undefined;
  connectedCallback(): void;
  disconnectedCallback(): void;
  _onFocusOut(e: any): void;
  _disableScrollAction(): void;
  _getDialogContent(d: any): any;
  _setFitInto(fitInto: any): void;

  /**
   * Reset dropdown size on close
   */
  _setResetSizeHandler(): void;
  _isUndefined(prop: any): any;

  /**
   * Reset previous calculated maxHeight,
   * in this way on each dropdown open action we'll get the same calculated new height.
   */
  resetIronDropdownSize(): void;
  _dropdownOpenedDownwards(overlayCoord: any): any;
  _noOptions(): any;
  _menuBtnIsDisabled(disabled: any, readonly: any): any;
  resetInvalidState(): void;
  _computeNoOptionsAvailable(options: any, optionsLength: any): any;
  _readonlyChanged(newValue: any, oldValue: any): void;
  _requiredChanged(newValue: any, oldValue: any): void;

  /**
   * Force styles update
   */
  _attributeRepaintNeeded(newValue: any, oldValue: any): void;
  _computeShownOptions(options: any, search: any, enableNoneOption: any): any;
  _trimByShownOptionsCount(options: any): any;
  _itemContainsSearchString(item: any): any;
  _computeShowLimitWarning(limit: any, searchedOptionsLength: any): any;
  _showNoSearchResultsWarning(noOptionsAvailable: any, shownOptionsLength: any, optionsLength: any): any;
  _validCoordinates(coords: any): any;
  _bottomTooCloseToViewportEdge(dropdownBottom: any): any;
  _dropdownBottomOutsideViewPort(openedDropdownCoord: any): any;
  _getViewportHeight(): any;
  _recalculateOptionsListHeightForIE11(newComputedHeight: any, openedDropdownCoord: any, searchboxHeight: any): any;
  _getSearchFieldHeight(): any;
  _getNewHeightRelatedToBottomViewportEdge(openedDropdownCoord: any, searchboxHeight: any): any;
  _resizeOptionsListHeight(): void;
  _onDropdownOpen(): void;
  _onDropdownClose(): void;
  _setDropdownWidth(): void;
  _setFocusTarget(): void;
  _setPositionTarget(): void;
  _getIronDropdown(): any;
  _getIronDropdownContent(): any;
  _getOptionsList(): any;
  _getSearchox(): any;
  _openMenu(e: any): void;
  _closeMenu(e: any): void;

  /**
   * On focus received from a previous element (filds navigation in form using Tab)
   */
  onInputFocus(e: any): void;
  notifyDropdownResize(): void;

  /**
   * Checks for IE11 browser :)
   */
  isIEBrowser(): boolean;
  arrayIsNotEmpty(arr: any): any;

  /**
   * prevents the element from rendering an error message container when valid
   */
  _getErrorMessage(message: any, invalid: any): any;
}
