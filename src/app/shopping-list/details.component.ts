import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({
  templateUrl: 'details.component.html',
  styleUrls: ['shopping.css']  // Ensure the CSS file is correctly linked if you have any
})
export class DetailsComponent implements OnInit {
  account: any; // Define the type of account

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.account = this.accountService.accountValue; // Initialize account in ngOnInit

    const shoppingForm = document.getElementById('shoppingForm') as HTMLFormElement;
    const itemList = document.getElementById('itemList') as HTMLUListElement;
    const clearButton = document.getElementById('clearButton') as HTMLButtonElement;

    shoppingForm.addEventListener('submit', (event: Event) => {
      event.preventDefault();

      const nameInput = document.getElementById('name') as HTMLInputElement;
      const amountInput = document.getElementById('amount') as HTMLInputElement;

      const newItem = {
        name: nameInput.value,
        amount: parseInt(amountInput.value, 10)
      };

      this.addItemToList(newItem, itemList);
      shoppingForm.reset();
    });

    clearButton.addEventListener('click', () => {
      itemList.innerHTML = ''; // Clear the item list
    });
  }

  removeItem(button: HTMLButtonElement): void {
    const li = button.parentElement;
    if (li) {
        li.remove();
    }
  }

  addItemToList(item: { name: string; amount: number }, itemList: HTMLUListElement) {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} (${item.amount})`;
    
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.classList.add('close-icon');
    closeButton.onclick = () => this.removeItem(closeButton);
    
    listItem.appendChild(closeButton);
    itemList.appendChild(listItem);
  }
}
