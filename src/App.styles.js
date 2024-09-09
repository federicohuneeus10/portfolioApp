import styled from 'styled-components';

export const AppWrapper = styled.div`
    background-color: #0C0327;
    width:100%;
    height: 100vh;

    h1{
        color:#fff;
        font-size: 32px;
        padding-left: 64px;
        padding-top:32px;
    }

    table{
        padding-left:64px;
        tbody{
            padding-top:24px;
        }
        .month-and-price{
            display:flex;
            flex-direction: row;
            border:1px solid #fff;
            .item{
                border-bottom: 1px solid #fff;;
                padding:8px 16px;
            }
            .container{
                border-right: 1px solid #fff;;
            }
            .price{
                text-align: center;
                padding:8px;
            }
        }
        .num-stocks-header{
            padding-left:24px;
        }
        .month-th{
            display:flex;
            flex-direction: row;
        }
        tr, td{
            color:#fff;
        }
        .stock-header{
            display: flex;
            width:200px;
        }
        .month-header{
            text-align: left;
            width:240px;
        }
        .stock-col{
            width:200px;
        }
        .price-col{
            width:240px;
        }
        .num-stocks-col{
            text-align: center;
            padding-left: 24px;
        }
    }
    
    .prices-table{
        padding-left:0px;
    }

    .dates-selector{
        display:flex;
        flex-direction: column;
        width:fit-content;
        padding-left:64px;
        padding-top:32px;

        .select-stock-col{
            padding-top:8px;
        }
        
        .second-title{
            padding-top:16px;
        }

        h1{
            font-size: 24px;
            width:fit-content;
            padding:0px;
            margin:0px;
        }

        p{
            color:#fff;
        }

        .cols-container{
            display:flex;
            flex-direction: row;
            gap:24px;
        }

        .col{
            display:flex;
            flex-direction: column;
            padding-top:16px;
            width:fit-content;
            p{
                margin:0;
            }
            select{
                margin-top:12px;
            }
        }

        .cta{
            display:flex;
            justify-content: flex-end;
            button{
                font-size: 16px;
                margin-top:32px;
                display:flex;
                justify-content: flex-end;
                background-color: #fff;
                border:1px solid #fff;
                border-radius: 10px;
                width: fit-content;
            }
        }
    }

`;
