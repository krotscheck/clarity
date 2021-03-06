/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles } from '@clr/core/internal';
import { html, LitElement } from 'lit-element';

/**
 * Web component modal actions to be used inside modal.
 *
 * ```typescript
 * import '@clr/core/modal/register.js';
 * ```
 *
 * ```html
 * <cds-modal>
 *   <cds-modal-header>
 *      <h3 cds-text="title">My Modal</h3>
 *   </cds-modal-header>
 *   <cds-modal-content>
 *     <p>Lorem Ipsum</p>
 *   </cds-modal-content>
 *   <cds-modal-actions>
 *       <cds-button>Ok</cds-button>
 *   </cds-modal-actions>
 * </cds-modal>
 * ```
 *
 * @beta
 * @element cds-modal-actions
 */
export class CdsModalActions extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'modal-actions');
  }

  render() {
    return html`<slot
      cds-layout="${this.hasAttribute('cds-layout') ? 'display:contents' : 'horizontal gap:sm align:right'}"
    ></slot>`;
  }

  static get styles() {
    return [baseStyles];
  }
}
