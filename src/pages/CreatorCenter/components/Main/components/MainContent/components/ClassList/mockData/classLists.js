const MOCK = [
  {
    id: 1,
    coverImage:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRUYGBgZGRgcGBocGBoYGRgaGBwaGRgYHBkcJC4lHB4rHxoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQsJSs0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ/P//AABEIANUA7QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABFEAACAQIDAwgGBwYFBAMAAAABAgADEQQSIQUxQQYTIjJRYXGBQlJykaGxBxQjYpLB0RVTgqKy0hZUk8LhM0NEgxdz8P/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAApEQADAAEDBAIBAwUAAAAAAAAAAQIRAyExBBJBURRhEzI0cQUiQoGR/9oADAMBAAIRAxEAPwDpERE6SBERABERABES3iK6Ipd2VFUXLMQAB3kwAuRNK2jy0Z7rg6YYXtz1QEJ4og6T+JsJgMWatY3r4ipU+6GKJ+BLXHjec968yJ0pOl1toUU69VF4auo18zLa7Ww5NhXpE9gdP1nMaeApL1aaD+EX98rfCUzoUQjvUH5zH5a9EfkR1ZHDC6kEdxv8pVORrgUU5kL02HGm7IfcpsfMTLYTlBjaRHTTEJxWoAj+VRBa/ipmk9TNcjVSzo0TX9j8rcPXYI2ajV4JUspb2GHRfyN5sE3VJ8FiIkbHbQpUFz1qiIva7Bb+Hb5Rt4AkxNSxPLmmdMPQq1fvECknkX6RHeFmLq8qsc56KYakOwh6p991EzrWmeWHckdBic6/xDj/AN9Q/wBBv75focrcah6dKhVHHIz0mt3BswJkrXh+RdyN+iYDY3KyhiH5s5qVXglSylu9GBKv5GZ+bJp7oYiIlAIiIAIiIAIiIAIiIAIiRNp7QTD0nq1DZEFz2k8FA4sToBJAt7Z2vTw1M1KhPYijV6jHcijiZzvH4qri3D4jRQbpQBuidjP67950HCeV8RUxFQ4itox0ppe4opwUffO9j5cJVODX6hv+2TKr8IRETiZnkRE8ZgN5A8dIJMR7Eo5xfWHvErjw0NlvEYdHXK6hh2EX8+4yfsrlBXwtlctXw4todatIdqn01HYdew8JEiaaetUsc05Mpj+WFauLYVeaQ7qrrmdxwZE3KD2t7phFwq5s7lqjne7ku/gCeqO4WlnDDm3NP0Wuyd3rp5E3HieyTZerrXT52Kqm2IiJz7kZEREBFrE4dHXK4BHxB4EHge+bJyU5QOHXDYlixN+ZqHe9v+2/3wNQeNu2YCWsVQzqVvY6FWG9XBurDvBF50aOs5pei5pp4OrxMTyY2r9Zw6Ows4ulQdlRDZvI6EdzCZaeommso3EREoBERABERABERABOb8oNpfW65Cm9CixVOypUGjue1V6o77nsmyctdqtSoinTNqtclEPqLa9R/Jd3eRNOoUlVVVRZVAAHcJx9Tqdq7URVYWCuIiedyYHjEDUmw7TIn11n0pJn++TlTyO9vL3wcIXbNUOYA9FB1BbcT6x8dJMEpds/Y9kQxhHbr1W9lOgPeOl8Z6Nm0uKKfaux95kuIO2wyRf2dR/dJ+ASk7Np+iCnejMvyMmRBVXsMkPmaq9SoHHY41/Ev5gwuPAIWoppk7idUJ7nGnvtJkpZAQQQCDvB1B8od2eUGfZF2mpyZxvQhx4Drj8JMlg8RuMx9fCOitzJBFj9m9yuo9A+j4bpb2fRd6a/btZQFIVFVgVABU5rm4mnanPJWMoytp4SBxkP9mIes1R/Go3yUgT0bMo/u1PiL/ORifZOESecX1l94jnV9ZfeJZ/Z9H90n4F/SP2fR/dJ+Bf0hiA2JAYGeyG2zaforkPahKH4R9QtqKtUHgS2YfhIsYKZ9hsbFyKxBTFVKd+jWQVAOAemQjnxKsn4Zvk5FhxiEqJVSqgenmy3pkg5hlYMM263ZNowfLd00xOHIHr0TnXxKGzjyzTv0dSVKls3mk1g3WJF2ftGlXTPRdXXtU3sewjeD3GSp05KEREoBERABEEzVuUfLLDUqVVadQVKoVlRUBcBz0VzMoIXU8TwkU0gNa2njfrOJqVhqifY0uzKh6bD2nv5KJblrCUAiKg9FQPGw1P5y7PJ1bdU2c9PLEREyAREQwLIMSzicUiWvqx6qgXZvASwtB31qMUXhTQ20+841J8JopeNwxkv18UiaM4B7L6nwG8yz9fJ6lKo3flyD+Yg/CWqdWkhK0kztxyAHX7znQeZlz7dvUTyLt+Qv75SmUPCKudrndSQeNQ3+Cn5zzPiPUp/jb+2Wnp26+JYHsuifC0oyp/m2/Gh+Yj29Bgkc7X40kPhU1+KiQ8TVdWLpRdXt0gMro4HA5Te/wB60uc4w3YlD7QQ/FSJWuNfsRx9xxf8LfrLX8DSwSMFjFqDS6sOsjCzL4js75JmOerSqEAko46pPQceBOjDu1BlODx9R0GWnc6gueghsSMw3k3Gug4zN6ed0JzkycorV0QXd1XxIHzmPrMAftsRbsRDk+V3MppmmDenh3dvWyW/mfWH415BSSTtKnwYt7KM39Inn7RHCnVP8B/Oeh653IiD7zkn3KPzltqlXjVor3ZSbfzCUpkMIr/aK8Uqjxpuf6bz0bTpcXy+0rL/AFCW0qVb256i3dlP98uZ6/q0n8HYfkYdkj7UV4eoBU57DVVSp6ykMrj1XTcy/HsM33kzyiGJDI65K6AF03qQbgOjcVNjpvHGc3qhCftcMQfWUK/xXpfCXdmVubcvha7I9gGVruGUEkKyPra5O6030tTt2fBcvHJ2GJr/ACY5RfWc9OooSugBZQbq6nQOh7Cbi28TYJ2zSayjQS3icQlNGd2CoilmY7goFyTLk0XlptHnqgwqHoJlfEW3Mx1p0u8emR3LFdKJywzgxm1dr1ca12LJhvQpglWqDg9UjWx4L2b7zGYymoFNFUBS66AWFkBfcPZk68h1zevTHYjt/So+ZnmvUqqyzF02yZEROZmYiJFxtRgURCFLkjMRewUXOnaf1lSu54AuYio62yJnJ+8FA8TLJp126zog7EGZvxNp8I+r1eNb3U1vH1DN16juOy+QeYS15qkkUi2r0qZIUF3O+3Tc+0x3DxsJWcO761WyoPQVrC3334+A0kzCYJmIpYemGdtyjQD7zn0VHEn4mb/sLkVTQB8SRXqbwLWpJ7Keke9rmaTDrc0mWzR8DgGamXQLToILtWfo0lH3eLn2dO+ahtLlJQDWVXrgHUsxoo1uxE6dvabymy/Tbt5jWTBIbU0RWcDQM7dUEDgq2IHa3dOVIRfUacfDjN505RpMSjoGwuXmEpsBV2XhynFlGZx3/aXze8Tr+waOzMZSFWhQw7Id/wBkgZW4hhbQzhHLXHbPqmj9RomnlQipcZczaW8SNdeN5L+izlA2Gx1Nc1qddhTdb6XbRG8Q1vImVgs+gf8ADmD/AMrQ/wBJP0lsclsCP/Eof6SfpMwJ7DAGn7c+j/BYgH7PmnIsHpnLwtqvVbzE5ntTZL4as1DEvZUQNTKsUR6YJGYga5hxF7Tvc1blRsejWxGCqVFDMlYqoO5gyO5BHGxQMO8ROcompTNE2ByQxGIUPTRMNTOqu6ZqjjgQmhUd5PlK+VWysHs9A2KxOIrVHvkpIy0r9pOUXC95M69a3hPlblntp8XjK1VjcZyqD1aaEhAOzTXxJiUJApSFTlEcxyUkVfVdnre8u1vgJsnJf6QadFgmIwOGZL6ulJVde+xuG+EwfIf6hzzftC/N5Dltmtn035dd17TAYzJnfm75MzZL78tzlv32tKwh4R9S4LBYHFUlqJRoVKbC6nm0P5aEdkv1uTmEYWbDUt1tEUG3cRqJyj6CdtMKlXCMSVZOcQeqykK9vEEHynb4YQYNYr8hsAyleYy96vUVh/EGvNb2p9Ge80KuYakJWuxB4Zaq9JfO86UYtE5TBymcLwtavszFK+JpuRkZMpILZWZWzI46NUDLu0bUzqOBxdOqi1KZDI4DKe0GS+UuyExWHekygkq2Q8UcDoMp4ENbWYLkhgxRwdFBe4W79vOMSagNuIctNNPbYWMEzauOFCi9U65FJA9ZvRXxJIHnOZ4ZGAJc5ncl3b1nc3by4DuAmc5Z441cSmHU9CiBUqdhdv8Apr/CLt4ssxM5uq1MvtRjqV4Eo5oZs/pZcvlcH5gSuJxZZkIiIgEt4igrrlcXHuIPAgjcZciCeN0UQm2aOFSqvfzjH4NeXdmYOmjlsQa9enl6gfKwN94y2zC19LyRLdaqEXMb2G+wJI77DhNZ1KyCpo6lyUrYFqd8GEC+kALOD2OG6QPjNgvpOGYdgWFajUKOOrURrHwPBh91rzbNlcvKtOy4qlzi/vaQ6Vu16RPxUnwE651E+djom0znn0v4F12m/RJ51KRT73RyWHfmWSto/RJiaWGNfnUZ1XO9IKRYAXID8SBfhN55WYPC7YpIcLiKf1mic1K5yvwJRlbpAXA4aEeM1XlP9IuPp0HwlfCczVZCjVCWsQRYsgtYki+oJE1LOUaX7puOGwGEfaODTZ71HUvRLlwQQ6sGe2g0ABM1TC4SpVYLTRnY7lVSx9wndPou5AthCcTiRauwIRNDzaneSRpmPwEAOniezwSPisWlNSzsqqN5JibAvlpruNbncfQQarh0es/c9QGlSHmDVP8ADNb29y0rucuFC0041HXM5H3E3L4tfwmvbE5R18LiKmUHE84qtV5yoQwZTlVg2U2uumXQdHhJ/JOcZJ7kdlcXBHbp758x7P5J1MRtJ8ETkIqVMzEbkUk5gONxa3jOy0PpGpf93DYin3gJUX3q1/hNX5V43C1qyY7BYkUcXT0IqU6lNao3ZTnUC9ja+4xqkxqkzXvpC+jpcBRWvRqs6ZgrhgAQWvYgjeNN00bYtKi9emtdylJmAdwLlV7QPdNi5Y8rcbjQtPEBVRTcKg6LNuzFgTeYfYuwnxLhQyU1uLvUdUVRxNibk9wlDOifRHstBtPE1KDl8PSRlRyLFs7Ll+Ct8J26807khSwGBoLRpYmkx6zvziXZjvY66DsEzFXlHhVBPPIbcFJY+QG+LuQsozM8JmnYzl3TGlKk797EIv5t8Jq+O5WY58x56nRThkQFlFuLuSP5ZLufYu6TpG19q0sPTL1WsNyjezsdyou9mJ0AEwWxqLimWqrlepUqVCl75BUYuqE7rgEXtpe803kmKmIxq4hmqVkSm6mrU6SBmK5BTuAL6G5QTok2091kMnJsIzNmqNfPVdqj33jMbqv8K5V8pfiJ5N13Vk5W8vIiIkjEREAEREAEREMiwRauBQnMt0f1kNifEbm8xKSaycFqDu6D+7cfhJkS1b8hkx1fE0mtzqMpGoLIeie0OLgHwMmrti6ZPrbFOxque3cM5JEuXltqKHeinxUTRamBq8FNDGlNUxbp7NVV+UkJtip/nap/95/IyP8AVafqJ+ETw4On6ifhEf5Ptldz9k19svvbEv8AxVSR8TMfU2orGylqrdidK3i24eZlmqKCHKKas/BFQFvPsHeZJwqvqXCqNMqL6Pi3E+AtBvbLE37LJxFVuitMp2sxU29lVJzGX8NhggsLknVmOrMeJJl6Jk6zsiWxEt06qt1WBtobG+olyJ5XIbo8KDiB7p5za+qPcJVEO5+wy/YAtwiJZq4lVYKAXduqiDM7eCjh37o57qeENZZdJtqd3GZfklsNMQGxFemGQkDDq9ypVb3q5Docx3E30W/GVbI5IPVIfGdFL3GHU3zf/a43+wNO283lEAAAAAAsANAANwtO/Q0O3ejWZxuwiAAAAADQACwA7ABunsROos5bEx9DBFxnqs5Y62DFVQHcoA+cuNs1L3D1FPc7fIm08dqc8nOTImNqPVo3ZjzlMbzYB0HE2GjCZBHDAEG4IuCOIk1ONxYKoiJIxERAkREQAREQKEpdwouxAHaTYSqWamFRmDMgYjdfUDwB0v3ypx5JLP18NpTRn7xon4zofK8cxUfrvlHqJceRc6nytJkSu5LhDz6LdCgiCyKAPn3k8ZciJDeRCIiJARq2CRjmsVb1lOVvMjf5yPXGIQEqUqDsYZX940b4TIxNFbXI0zHYfEVnF1NLsPXup7CDqDLvN1zvdF9lCfiW/KSwP+e+ewd77IMkM4It16rt3AhB/KAfjMhyZ2guBch0U0HPSqWvUpE+u296ff6PhLcEX0Oo4iXGq5eSppo6gjggEEEEXBGoIO4gyqaByR2scPUXDOb0ahPMMTfm33817J9Hs3dk3+enFKllG633ERE0A5RhawdFddxA/wCZdkLDKEqOnB+mg4A7nA+B85Nnh0t9jnFpBwYyO9MdWwdB2BtGUdwPzk6QceuV6dQcGyN3q+n9Vo532BeidERIJESLicUVbIihnIvYmwUbgWO/yEsHD1G69ZvBAEHv1PxlqfbOnS6a9RZSMjAmO+pnhWqj+IH4ESpRXXc6OOxlyH8S6fCPtl8Muui1J8E+JB/aOX/qIyfe6yfiXd5gSYjqwupDA8Qbj3yXDRzVp1PKKoi8ScECIEQAREQKEREAEREAEREAERBgSWcXQzqVBsdCrDerKbow7wbGdG5O7S+s4anV3My2cdjoSrj8QM5/Ni+j57LiafBaodR3VFVj/MHnd0l7uTbTrwbhERPQNDke0Fsocb0IYeG5h+G8kgw63BHaCPfIex3JpLfUrmU/wkr+U8PGZOblE2RNrD7Jz6tm/AQ35SXLeJTMjL2qw94MU/qQIuAxI+AfNTRu1F+UkQpb4BmPor9tVPcg8rGSpDx9XmnRyOg9kc+qdcjH3kecmS6XDPc6O1WkkvB47AC50Almni6bGyuhI4BheXmAIIO7jJmxdo4RDzG0cPTemW+zxLICVvoEqMBcW4N7+2PThU8Nm2tdQspZIkitgVvmQsjHeUsL+IIIM3rF/RxQe1TCYh6QIuq356keIsCb28DNbx+wMdRztzIrojZWakTnBAuTzbakWI3GavRqf0mP59O1il/0xJSuOrUVvbT81I+UqGKrDrUlb2H/ACa3zlqltSkxyl8jbijAqwPYQ1pNBmT7ltSE+m0b4I/7UUddKieKEj3rcS7Tx9Jt1RL9mYA+4y5eWqlFW6yqfEAwzPoyroF/iyUDfdExv7NpeiuT2WZP6TKvqjDq1qg8SG/qBicz4Zz10FrhmQiY7m643VVPtJ+akSsVK43imfN1/WHavDM30equETokMVqvqJ+M/wBsq56p6i/jP9sXb9i+Jq+iVEhtVrcEQeLsfksoYVz6aIO5Cx97G3wjUr2C6TVfgnyxiMZTTR3UHsvdvJRqZEOBJ69R37s2Qe5LfGXsPhUTqIq+A1Pid5hiV5ybx0NPkttjHb/p0yo9d+iPEINT52lWGqV8OzVqVZ+csCy6Cm4W5CMg4akX3i++SJRSoPiXOHw+rkWdt6UlO93Pbbcu8ma6dN0lKOh9Pp6ctnVMBilq00qL1XRXHgwBtL8sYDCrSppTTqoioL77KABfv0l+eouDhZy2QNl6Gqnq1GPkwDfmZPkDD6YiqPWRG+a/kJ4s8M5VwyfPGE9iQuRELYx+xTuzA+IYgybMJSwmLC5Q1NAWZr2LN0iWt2cZNXB1La4h7+yn6TSpWc5Ka+yXXpK6lGF1IsRMTg6zUn5mp/63O5xwUn1hJTYeuuq1Q9vRdQL92ZbWnqsmIQoy2I6yHrIeBB+REa2WHujXQ1q0qyiRPHQEEEAg7wd0gms9CwqXdOFQC5A4BwN3jJtN1YBlIIO4g3BictbnuaetGpOUSth7VxOCNqDB6N7mg/VF9+RxqvxHdN12By0w7My1j9Xd3zKrnom4UWFTq303aGaFKXQMLMAQd4IuPcZpOvS5M9TpprdbHYNp7Jw2JUmrRpVRlJDMitw0s01yh9H2Bq0abBHpOUU56bshuQNctyvwmj7MxmIwoK4asUQkk02UVKeu+ynVb/dI8Jsmx+XtSkFp18NmRQFFSkwZrDQFka3DsJnROrFeTkrRuCjH/Rzil1w+LVx6tZLH8afpMEdhbSVQ31UVVJIvTqLfQ2vlax4GdKpcscE6tlxCK2UkK96bXtuyuAd8yGxcVSakipURyFW+VlYg21vY743EV4EtbUnycgrYbEIL1cLiE7SabOB4lLyGu0aRNs6g9hOU+4zvptMFh9j4aurmtQpVCalXrIr7nI3kd0h6Evg0XV15RyhXB3EHzns6ViPo+2a//iovsl0/pMx2M5AYEPTUUmAdmDWq1OqqM2nS0N7ajskPp/TNF1f0aNE6D/8AGezr9Sr/AK9X+6WcZ9HWz1puwpVLqrMPt6vAXHpRfH+w+YvRokGb1S+jHZ5VSUqgkAm1epa5GvGXKf0Y7NU3NN27mrVCPdeP4/2L5a9HNq+0aK9aog7r6/CXcFUfEHLh6NWsfuoQniXaygec6fsTkngVLsuFo3WowQlAxAW1gC19xvNpVABYAAd2ktaErkiurp8I5JsvkfXrDNianMpcjJTIZzlNmDVD1dbjojhvm7bN2dSw6BKKBF7BvJ4lidWPeZdwvVPtv/W0vTriJlbI5b1Kp7sRESyDlLFkZ6dXovT0ccCLXV1+4w1HmOEibLXNmqne507kGiD8/OYqvUeq5NXpvUcXqHRxewKm29cgsANNBpNjUACw0A0E4Or0H09OXyc7ctZk9iInESIiIFCQcQoFekRvIcHvAAPwMlYmuEQu1yANwFye6YvA4xGfO7gO2iqbgID6IJFrnjNITxkF7MwRMXW2VlOegxptxXejeK8PKZQxJVORzdQ8yzFjGsmlZCn3wLofMdXzkqjXVxdWDDuIPykoyI+zqRbMEyt6y9E+eXf5yk5fJ3afX0tqRdiWalCqOo6nudf9y2+UtjEuvXpsPvJ01+HSHugpzwdsdXpV5JLKDvAPlItTZlInMFyN6ykq34ltLlLFI/VcHuvY+46y/EnUm7UV6ZKwe2sdRAFPFuwW1lrKtRbdmawf4zPbI5eVKQy18NmBZmL0nB1clj0HtxJ4mavE0WvSMq6aH4wdAX6SMF6a108aLsPel5T/AI8wFSpSIxAUIzFs6vTsGUqD0gOM0GeFR2TRdR7Rk+kXhnUv8c7N/wA5R/FI20OWmz3pOq4ukWZGCgNqSQQB75zTm17B7hPcg7B7o/kfQvifZ1Cjy32cFUHF0tAB1jwHhKzy42d/nKP4v+Jy2wjKOyL5H0HxPs6Ps/lngFDZsVSF6lRh0t6sxIPhbWR8d9JuBW4pGpXYejTRrebtZR75oAUdk9Atuh8j6D4i9nSNg41a+HSsoIFQFwDvGZiSPfMhNU+jt2OGcegteoE8OizW7gxabXPQh5lM4KWKaEREsRwqiOnS9sf0tNjmuUf+pS9v/a02OR/XP3b/AIRxaX6EIiJ4hYiIgUJRUpqwswBB3gi4lcx1Xaoz81T6dTXTcq23knu7pUJvgSLuy3ulj6Luo8FYgfCwkyQKWz2QdGs4uSSLIVLHUmxF9/fK+arjdUU+0h/2sJdQm8pg0TIkMnEDhSbzZfyMc9XG+ip9mp+ok9j9hgmQJD+tPxoP5Mh/3CPrjfuKn8n90OxhgkVsMj9dFbxAPxkNtkIDdHdD91zb8LXEufXT+5qe5f7oONb9xV9yf3SkqRpN3PDLf1SuOrWVu50/NSJSxxI9Cm3g7KfiJe+tvwoP5mmP90c9XO6io9qp+imUlXlI2nqtVeSP9cqDr4d/FWR/kbzw7WQdZaie1Tf5gRj8VWRblqasdFUBmLHs1I89JJ5NV6VTEgY51CWHNqMyU3cnXOb8BawJsbzq0+ku57u3Y0nrL4bI67XoH/up53X5yQmKRuq6HwYTqH7Hw37ilb2F/SR8RyZwT9fC0T/AoPvAifSL2brrK9HPQRw1ibz/AIMwH+VpjwDD5GVHkjgbW+rqPB3HyaT8R+yl1n0aGzAC5Nh36S3g6dTFPzWFGY7nq+hSHFi3pN2KJv68jcBcE4ZGP3iz/wBRMzOHoIihERUUblUBVHgBpNI6VJ5bIvq3SwkR9j7OTDUUopcqi2ud7HezHvJJPnJsROrg5MiIiUBw3DD7Wn7Tf0NNgiJn/XP3b/0cWn+hCIieKzRCIiAwZFr4Gm2pUAn0howPaGGsRLh7iXJh6WNrAuvOBsjEAsgJNuJsRGI23Up7wreRX8zPInuzpQ9NPHgbe5TQ5Tk6c0Pxn9JOw23Mxtzdv4r/AO2InNWlHoZkhiL8PjKhU7oiYVE+hDnO6WWxdgTbd3/8REcxPoDE4rlGV0FP+b/iUDadZxcMEH3V197E/KInodNow6WwmyzksQxJZj6RNz75UyAixFweE9ifV6UStLGDhqn3mZ5P8q6+GNNCedpMyAI5OZM5A6NTfYX3EHynXVNwP/28XnkT5zq4lXsj1NN/2lURE5CxERABERABERAD/9k=',
    coverGallery: [
      'https://i.pinimg.com/564x/cb/f8/5d/cbf85de616a31f663d3d2e3157d84bdb.jpg',
      'https://image.fmkorea.com/files/attach/new/20190611/486616/1585860246/1892567706/99b983892094b5c6d2fc3736e15da7d1_1.jpg',
      'https://image.fmkorea.com/files/attach/new2/20210907/3166658836/3457613409/3897030220/99b983892094b5c6d2fc3736e15da7d1.jpg',
    ],
    classTitle: '승훈의 따봉강좌',
    mainCategory: '1',
    subCategory: '1',
    categoryDetail: '따봉을 잘 날리는 법',
    classLevel: '3',

    classIntroduce: '따봉따봉 따따봉',
    createdAt: '2022-10-05 오후 3:17',
  },

  {
    id: 2,
    coverImage:
      'data:image/jpeg;base64,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',
    coverGallery: ['', '', ''],
    classTitle: '주리더의 트월킹 강좌',
    mainCategory: '2',
    subCategory: '3',
    categoryDetail: '트월킹은 이렇게 한다.',
    classLevel: '4',

    classIntroduce: '월킹월킹 트월킹',
    createdAt: '2022-10-05 오후 3:17',
  },
];

export default MOCK;
