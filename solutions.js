твои решения
ас сай масть ег

const f = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data);
};
f()

const f1 = async () => {
  try {
    const res = await fetch("https://this-site-doesnt-exists.intocode");
    const data = await res.json();
  } catch (Error) {
    console.log(Error);
  }
};
f1()


const f3 = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    const ff = typeof data
    console.log(ff);
  };
f3()



const f4 = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const obj = await res.json();
    const len = obj.data.length
    console.log(len);
  };
f4()


const f5 = async () => {
    const res = await fetch("https://reqres.in/api/users/1");
    const obj = await res.json();
    const email = obj.data.email
    console.log(email);
  };
f5()



const f6 = async () => {
    const res = await fetch("https://reqres.in/api/users" , {
        method: "POST",
        body: {"first_name": "intocode"},
        headers: {
            'Content-type': 'application/json'
        },
    })
    const data = await res.json()
    console.log(data)
}
f6()

const f7 = async () => {
    const res = await fetch("https://reqres.in/api/users" , {
        method: "POST",
        body: JSON.stringify({"first_name": "into", "last_name": "code"}),
        headers: {
            'Content-type': 'application/json'
        },
    })
    const data = await res.json()
    console.log(data)
    console.log(data.createdAt)
    console.log(data.id)
}
f7()


const f7 = async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}` , {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        },
    })
    console.log('apkepawd')
}
f7(5)



const f7 = async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}` , {
        method: "PUT",
        body: JSON.stringify({"first_name": "интукод"}),
        headers: {
            'Content-type': 'application/json'
        },
    })
    console.log(res.data)
}
f7(3)