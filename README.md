# Retirment_wallet
Crypto Retirement  Wallet
## The system is built with react an reach

#Learn more about reach here https://docs.reach.sh/tut/rps/#tut

below is a simple python markdown of the apps "idea"

```py

#down -m -md eg --py +x

#simple example


from email import message
from logging import PlaceHolder
from tkinter import*
from tkinter import messagebox
import sqlite3
import tkinter

conm = sqlite3.connect('WalletHolder.db')
cur = conm.cursor()

conm.execute(""" CREATE TABLE IF NOT EXISTS wallet_holder_details (
    name  TEXT  NOT NULL,
    date_of_b TEXT  NOT NULL,
    wallet_addr   TEXT NOT NULL,
    password TEXT Not Null)
""")
root = Tk()
root.title("main window")
root.geometry('460x420')
root.config(bg = 'black')

super_pass = "{@Incorrect1_super}"

def done():
    root.destroy()

def start_errthing():

    for item in root.winfo_children():
        item.destroy()
    
    root.config(bg='navy blue')

    page_info = Label(text="  setup  ", fg='black', bg="gold")
    page_info.pack()

    nameDetails = StringVar()
    name = Entry(textvariable=nameDetails, width=30)
    name.place(x=100, y=100)
    name.insert(0, "name")
    

    Datedet = StringVar()
    Date_o_b = Entry(textvariable=Datedet, width=30)
    Date_o_b.place(x=100,y=130)
    Date_o_b.insert(0, "date of birth")
    

    walletdet = StringVar()
    walletAddr = Entry(textvariable=walletdet, width=30)
    walletAddr.place(x=100,y=160)
    walletAddr.insert(0, "wallet address")
    

    passdet = StringVar()
    password = Entry(textvariable=passdet, width=30)
    password.place(x=100,y=190)
    password.insert(0, "password")
    

    button2 = Button(text = 'view wallet', fg='gold', bg='brown', height=1, width=10, command=see_details)
    button2.place(x=1, y=35)
    root.title("Add Book")
    root.config(bg = 'teal')
    exit_button = Button(text='EXIT!', fg='teal', bg='grey', height=1, width=7, command=done)
    exit_button.place(x=1, y=8)

    

    def save():
        '''
         wallet_holder_details (
    name  TEXT  NOT NULL,
    date_of_b TEXT  NOT NULL,
    wallet_addr   TEXT NOT NULL,
    password TEXT Not Null)
        '''
        uname = nameDetails.get()
        date = Datedet.get()
        wallet = walletdet.get()
        passw = passdet.get()

        cur.execute(f"INSERT INTO wallet_holder_details VALUES ('{uname}', '{date}', '{wallet}', '{passw}')")
        conm.commit()
        messagebox.showinfo('info saved','details saved saved', )
    savebut = Button(text = 'save details', fg='gold', bg='teal', height=1, width=10, command=save)
    savebut.place(x=100,y=220)

def see_details():

    for item in root.winfo_children():
        item.destroy()

    button2 = Button(text = 'create retirenment wallet', fg='gold', bg='brown', height=1, width=10, command=start_errthing)
    button2.place(x=1, y=35)
    root.title("Add Book")
    root.config(bg = 'teal')
    exit_button = Button(text='EXIT!', fg='teal', bg='grey', height=1, width=7, command=done)
    exit_button.place(x=1, y=8)

    nme = StringVar()
    name_ = Entry(textvariable=nme, width=40)
    name_.place(x=120, y=130)

    passw = StringVar()
    pasw = Entry(textvariable=passw, width=40)
    pasw.place(x=120, y=150)

    def get_user():
        name1 = nme.get()
        passw1 = passw.get()

        select = cur.execute(f'SELECT * FROM wallet_holder_details WHERE book LIKE ?', (name1,passw1, )).fetchall()

        if len(select) == 0:
            messagebox.showinfo('not found', 'password or username incorrect')
        else:
            name_.delete(0, 'end')
            pasw.delete(0, 'end')
            canvas = Tk()
            canvas.title('Book list')
            canvas.geometry('400x550')
            canvas.resizable(False, False)
            line = 10
            x_scale = 20

            for i in select[0]:
                nametext = Label(canvas, text=f'Name: {i[0]}')
                nametext.place(x=x_scale, y=line)
                line += 20
                #dob
                dob = Label(canvas, text=f'd/o/b: {i[1]}')
                dob.place(x=x_scale, y=line)
                line += 20
                #wall
                wall = Label(canvas, text=f'wallet: {i[2]}')
                wall.place(x=x_scale, y=line)
                line += 20

                #pass
                passy = Label(canvas, text=f'Encrypted password: {hash(i[3])}')
                passy.place(x=x_scale, y=line)
                line += 20

    button = Button(text = 'See details', fg='gold', bg='white', height=1, width=20, command=get_user)
    button.place(x =220, y=210)

    

if __name__=="__main__":
    root.resizable(False, False) # <-- to keep the screen one size and unchangeable
    button = Button(text='  Start a retirement wallet   ',fg='yellow',bg='dark green',height=1,width=35,command=start_errthing)
    button.place(x =0, y=0)

    button2 = Button(text = 'Search Book', fg='gold', bg='brown', height=1, width=10, command=see_details)
    button2.place(x =120, y=0)
    root.mainloop()


```
