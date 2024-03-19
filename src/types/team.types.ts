export interface TeamList {
  id: number | string
  title: string
  desc: string
}

export interface TeamListProps {
  list: TeamList[]
}
export interface TeamItemProps {
  title: string
  desc: string
}